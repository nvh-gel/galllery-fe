import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MenuService} from "../../../service/menu/menu.service";


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

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

  closeMenu() {
    this.menu.changeState('');
  }
}
