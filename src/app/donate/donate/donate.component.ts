import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnDestroy, OnInit {
  donateUrl = 'https://focoshospital.org/donate-now/';
  loading = false;
  menuItems = [
    { icon: 'fa fa-3x fa-credit-card', text: 'GENERAL DONATION', internal: true, url: 'http://weblink.donorperfect.com/focos_donation' },
    { icon: 'fa fa-3x fa-folder-o', text: 'ENDOWMENT FUND', internal: true, url: 'http://weblink.donorperfect.com/focos_donation' },
    { icon: 'fa fa-3x fa-ticket', text: 'EVENING OF HOPE TICKETS', internal: true, url: 'http://weblink.donorperfect.com/evening_of_hope' }
  ];
  selectedView = null;
  appUrl: any;
  externalAppUrl: any;
  toggleSelectedViewSubs: any;
  constructor(private domSanitizer: DomSanitizer, private appService: AppService) { }
  initSubs() {
    this.toggleSelectedViewSubs = this.appService.toggleSelectedViewAnnounce$.subscribe(
      () => this.selectedView = null
    )
  }

  ngOnDestroy() {
    if (this.toggleSelectedViewSubs) { this.toggleSelectedViewSubs.unsubscribe(); }
  }
  
  ngOnInit() {
    this.selectedView = null;
    this.initSubs();
  }

  sanitizeUrl(url) {
    this.externalAppUrl = url;
    this.appUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalAppUrl);
  }

  viewSelected(menuItem) {
    if (menuItem.internal) {
      this.viewInternalLink(menuItem);
    } else {
      document.location.href = menuItem.url;
    }
  }

  viewInternalLink(menuItem) {
    this.loading = true;
    this.donateUrl = menuItem.url;
    this.sanitizeUrl(this.donateUrl);
    this.selectedView = menuItem;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}
