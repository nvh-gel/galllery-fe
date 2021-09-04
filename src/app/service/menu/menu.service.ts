import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private stateSource = new BehaviorSubject('');
  currentState = this.stateSource.asObservable();

  constructor() {
  }

  changeState(state: string): void {
    this.stateSource.next(state);
  }
}
