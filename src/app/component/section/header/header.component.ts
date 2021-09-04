import {Component, HostListener, OnInit} from '@angular/core';
import {ScrollService} from "../../../service/scroll/scroll.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sticky!: string;
  subscription!: Subscription;

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    this.subscription = this.scrollService.currentScroll.subscribe(state => this.sticky = state);
  }

  @HostListener('window:scroll', ["$event"])
  updateSticky() {
    let stickyState = window.pageYOffset > 0 ? 'sticky' : '';
    this.scrollService.updateScrollState(stickyState);
  }
}
