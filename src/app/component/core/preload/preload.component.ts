import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
  animations: [
    trigger('fadeOut', [
      state('void', style({opacity: 1})),
      state('*', style({opacity: 0})),
      transition(':enter', [animate(1000)]),
    ]),
  ],
})
export class PreloadComponent {
  hidePreload: boolean = false;

  hide() {
    this.hidePreload = true;
  }
}
