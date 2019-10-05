import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../../app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventsHubUrl = 'https://focos.focoshospital.org/events-hub/';
  eventsTicketUrl = 'http://weblink.donorperfect.com/evening_of_hope';
  externalAppUrl: any;
  externalAppTitle: string = 'Upcoming Events';
  appUrl: any;
  loading: boolean;
  toggleSelectedViewSubs: Subscription;
  constructor(private domSanitizer: DomSanitizer, private appService: AppService) { }
  initSubs() {
    this.toggleSelectedViewSubs = this.appService.toggleSelectedViewAnnounce$.subscribe(
      () => this.externalAppUrl = null
    )
  }
  ngOnInit() {
    this.initSubs();
  }

  sanitizeUrl(url) {
    this.externalAppUrl = url;
    this.appUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalAppUrl);
  }

  viewInternalLink(urlType) {
    const appUrl = urlType && urlType === 'TICKET' ? this.eventsTicketUrl : this.eventsHubUrl;
    this.externalAppTitle = urlType && urlType === 'TICKET' ? 'Evening of Hope - Tickets' : 'Upcoming Events';
    if (urlType && urlType === 'TICKET') {
      window.open(appUrl);
    } else {
      this.loading = true;
      this.sanitizeUrl(appUrl);
      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }
  }

}
