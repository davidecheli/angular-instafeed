import { Component, OnInit } from '@angular/core';
import { InstaFeedService } from '../services/insta-feed.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public instaFeedService: InstaFeedService) { }

  ngOnInit() {
  }

  goToProfile() {
    this.instaFeedService.getUserData().then(
      data => {
        window.open(data.feedUrl, '_blank');
      }
    )
  }

}
