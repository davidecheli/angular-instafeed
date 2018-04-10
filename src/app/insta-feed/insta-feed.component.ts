import { Component, OnInit, Input } from '@angular/core';
import { InstaFeedService } from '../services/insta-feed.service';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {
  @Input() item;
  @Input()
  set ready(isReady: boolean) {
    if (isReady) {
      this.instaFeedService.iframeSizeEvent();
      this.instaFeedService.loading='hide';
    };
  }

  constructor(public instaFeedService: InstaFeedService) { }

  ngOnInit() {
  }

  goToPost(_shortcode: string) {
    window.open('https://instagr.am/p/'+_shortcode, "_blank");
  }

}
