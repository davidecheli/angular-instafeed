import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { InstaFeedService } from './services/insta-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public feedEntries = this.instaFeedService.getFeed();
  public userData = this.instaFeedService.userData;

  constructor(private instaFeedService: InstaFeedService) {
  }

  ngOnInit() {
  }
}
