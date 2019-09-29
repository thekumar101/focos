import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  selectedView: any;
  externalAppUrl: any;
  appUrl: any;
  loading: boolean;
  contactUrl = 'http://weblink.donorperfect.com/messagefocos';

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedView = this.contactUrl;
    this.viewInternalLink();
  }

  sanitizeUrl(url) {
    this.externalAppUrl = url;
    this.appUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalAppUrl);
  }

  viewInternalLink() {
    this.loading = true;
    this.sanitizeUrl(this.contactUrl);
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
