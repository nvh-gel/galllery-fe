import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('hidden', style({opacity: 0, display: 'none'})),
      state('display', style({opacity: 1, display: 'block'})),
      transition('hidden => display', animate(500)),
      transition('display => hidden', animate(500)),
    ])
  ]
})
export class ScrollComponent {

  hidden: string = 'hidden';

  @HostListener('window:scroll', ["$event"])
  toggleScrollUp(): void {
    this.hidden = window.pageYOffset > 300 ? 'display' : 'hidden';
  }

  scrollToTop() {
    window.scroll(0, 0);
  }
}
