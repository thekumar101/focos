import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: false, noPause: true, showIndicators: true } }
  ]
})
export class AppComponent {
  activeSlideIndex: number = 0;
  donateNowUrl = 'http://weblink.donorperfect.com/focos_donation';
  menuItems = [
    { index: 0, icon: 'focos', route: 'home', view: '/home', title: 'Event', subscript: '09/23', footerLabel: 'View Detail...', footerIcon: 'mat_date_range', active: true },
    { index: 1, icon: 'mat_people', route: 'about', view: '/about', title: 'FOCOS', subscript: null, footerLabel: 'Learn More...', footerIcon: 'mat_info', active: false },
    { index: 2, icon: 'donate', route: 'donate', view: '/donate', title: 'Donate', subscript: null, footerLabel: 'View Detail...', footerIcon: 'mat_attach_money', active: false },
    { index: 3, icon: 'address-card', route: 'contact', view: '/contact', title: 'Contact Us', subscript: null, footerLabel: 'Share Contact...', footerIcon: 'mat_account_circle', active: false }
  ];
  title = 'focos';
  view: any;
  selectedView: { icon: string; view: string; title: string; subscript: string; footerLabel: string; footerIcon: string; active: boolean; route: string; } = { icon: 'focos', route: 'home', view: '/home', title: 'Event', subscript: '09/23', footerLabel: 'View Detail...', footerIcon: 'mat_date_range', active: true };

  constructor(private router: Router, private appService: AppService) {}
  donateNow() {
    this.router.navigate(['/donate']);
  }
  initSubs() {
    this.routeSubs();
  }
  ngOnInit() {
    this.initSubs();
  }

  slide($event) {
    const menuItem = this.menuItems.find(itm => itm.index === $event);
    this.selectView(menuItem);
  }
  selectView(menuItem) {
    if (menuItem && this.view && (this.view === menuItem.view)) {
      this.appService.announceToggleSelectedView('TOGGLE_SELECTED_VIEW');
    }
    this.router.navigate([`${menuItem.route}`]);
  }

  setMenu() {
    this.menuItems.forEach(menuItem => {
      menuItem.active = false;
      if (this.view && this.view.indexOf(menuItem.view) > -1) {
        menuItem.active = true;
        this.activeSlideIndex = menuItem.index;
        this.selectedView = menuItem;
      }
    });
  }

  routeSubs() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.view = event && event.url ? event.url : null;
        this.setMenu();
      }
    });
  }
}
