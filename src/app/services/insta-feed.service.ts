import { Injectable } from '@angular/core';
//import { Router} from '@angular/router';
import {URLSearchParams} from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InstaFeedService {
  private instagramUrl = 'https://www.instagram.com/';
  private instagramAfterUrl = '/?__a=1';
  public feedEntries;
  public userData;
  public loading = 'show';

  constructor(private http: HttpClient) {
  }

  iframeSizeEvent() {
      window.parent.postMessage(document.getElementById('instaFeed-body').offsetHeight+13, '*');
      window.addEventListener("resize", function(){
        window.parent.postMessage(document.getElementById('instaFeed-body').offsetHeight+13, '*');
      });
  }

  getUsername() {
    let params = new URLSearchParams(window.location.search);
    return params.get('username');
  }

  getUserData() {
    let _username = this.getUsername();
    return this.getJson(this.instagramUrl + _username + this.instagramAfterUrl).then(
      data => {
        return {
          name: data['graphql']['user']['full_name'],
          username: _username,
          feedUrl: this.instagramUrl + _username
        }
      }
    );
  }

  getFeed() {
    let _username = this.getUsername();
    this.getUsername();
    return this.getJson(this.instagramUrl + _username + this.instagramAfterUrl).then(
      data => {
        return data['graphql']['user']['edge_owner_to_timeline_media']['edges'].slice(0,6)
      }
    );
  }

  getJson(_url: string) {
    return this.http.get(_url).toPromise();
  }

}
