import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private toggleSelectedViewAnnounce = new Subject<string>();
  toggleSelectedViewAnnounce$ = this.toggleSelectedViewAnnounce.asObservable();
  constructor() { }

  announceToggleSelectedView(detail: string) {
    this.toggleSelectedViewAnnounce.next(detail);
  }
}
