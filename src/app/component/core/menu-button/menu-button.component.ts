import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from "../../../service/menu/menu.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit, OnDestroy {

  state!: string;
  subscription!: Subscription;

  constructor(private menu: MenuService) {
  }

  ngOnInit(): void {
    this.subscription = this.menu.currentState.subscribe(state => this.state = state);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openMenu() {
    this.menu.changeState('menu-open');
  }
}
