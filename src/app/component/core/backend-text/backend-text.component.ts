import {Component, Input, OnInit} from '@angular/core';
import {Decorator} from "../../../interface/decorator";

@Component({
  selector: 'app-backend-text',
  templateUrl: './backend-text.component.html',
  styleUrls: ['./backend-text.component.scss']
})
export class BackendTextComponent implements OnInit {

  @Input() decorator!: Decorator | undefined;
  backgroundTextStyle!: {};

  ngOnInit(): void {
    let align = this.decorator?.textAlign;
    let horizontal;
    if ('right' === align) {
      horizontal = {left: `${this.decorator?.textPositionX}%`};
    } else {
      horizontal = {right: `${this.decorator?.textPositionX}%`};
    }
    let vertical = {};
    if (this.decorator?.textPositionX) {
      vertical = {top: `${this.decorator.textPositionY}px`};
    }
    this.backgroundTextStyle = Object.assign({}, horizontal, vertical);
  }
}
