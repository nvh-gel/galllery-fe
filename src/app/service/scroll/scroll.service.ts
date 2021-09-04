import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollState = new BehaviorSubject('');
  currentScroll = this.scrollState.asObservable();

  constructor() {
  }

  updateScrollState(state: string): void {
    this.scrollState.next(state);
  }
}
