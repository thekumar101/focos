import { Component, OnInit, Input, OnChanges, ɵ_sanitizeUrl } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-external-url-viewer',
  templateUrl: './external-url-viewer.component.html',
  styleUrls: ['./external-url-viewer.component.scss']
})
export class ExternalUrlViewerComponent implements OnChanges, OnInit {
  @Input() externalAppUrl: string;
  appUrl;
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() { }

  ngOnChanges() {
    this.sanitizeUrl();
  }

  sanitizeUrl() {
    this.appUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.externalAppUrl);
  }

}
