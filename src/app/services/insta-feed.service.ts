import { Injectable } from '@angular/core';
//import { Router} from '@angular/router';
import {URLSearchParams} from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InstaFeedService {
  private instagramUrl = 'https://www.instagram.com/';
  private apiUrl = 'https://apinsta.herokuapp.com/u/';
  public feedEntries;
  public userData;
  public loading = 'show';

  constructor(private http: HttpClient) {
  }

  iframeSizeEvent() {
      const instaFeedBody = document.getElementById('instaFeed-body');
      const offsetHeight = instaFeedBody.offsetHeight+13;
      
      let postMessage = (_height) => {
        return window.parent.postMessage(_height, '*')
      }

      postMessage(offsetHeight);
      setTimeout(postMessage(offsetHeight), 2000);
      window.addEventListener("resize", function(){
        postMessage(offsetHeight);
      });
  }

  getUsername() {
    let params = new URLSearchParams(window.location.search);
    return params.get('username');
  }

  getUserData() {
    let _username = this.getUsername();
    return this.getJson(this.apiUrl + _username).then(
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
    return this.getJson(this.apiUrl + _username ).then(
      data => {
        return data['graphql']['user']['edge_owner_to_timeline_media']['edges'].slice(0,6)
      }
    );
  }

  getJson(_url: string) {
    return this.http.get(_url).toPromise();
  }

}
