import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy, OnInit {
  aboutFocosUrl = 'http://www.orthofocos.org/about-focos';
  loading = false;
  menuItems = [
    { icon: 'fa fa-3x fa-hospital-o', text: 'THE HOSPITAL', url: 'https://focoshospital.org/focos-overview/' },
    { icon: 'fa fa-3x fa-users', text: 'BOARD OF DIRECTORS (US)', url: 'https://focos.focoshospital.org/our-board/' },
    { icon: 'fa fa-3x fa-users', text: 'BOARD OF DIRECTORS (GHANA)', url: 'https://focoshospital.org/board-of-directors/' },
    { icon: 'fa fa-3x fa-university', text: 'THE FOUNDATION', url: 'https://focos.focoshospital.org/our-story/' }
  ];
  selectedView = null;
  appUrl: any;
  externalAppUrl: any;
  toggleSelectedViewSubs: Subscription;
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
    this.loading = true;
    this.aboutFocosUrl = menuItem.url;
    this.sanitizeUrl(this.aboutFocosUrl);
    this.selectedView = menuItem;
    setTimeout(() => {
      this.loading = false
    }, 4000);
  }

}
