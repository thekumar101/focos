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
  eventsTicketUrl = 'https://focos.focoshospital.org/evening-of-hope-tickets/';
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
    this.loading = true;
    const appUrl = urlType && urlType === 'TICKET' ? this.eventsTicketUrl : this.eventsHubUrl;
    this.externalAppTitle = urlType && urlType === 'TICKET' ? 'Evening of Hope - Tickets' : 'Upcoming Events';
    this.sanitizeUrl(appUrl);
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
