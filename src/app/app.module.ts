import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';
import { HeaderComponent } from './header/header.component';
import { InstaFeedService } from './services/insta-feed.service';


@NgModule({
  declarations: [
    AppComponent,
    InstaFeedComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InstaFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
