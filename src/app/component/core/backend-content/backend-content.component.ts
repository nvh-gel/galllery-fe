import {Component, Input, OnInit} from '@angular/core';
import {Decorator} from "../../../interface/article";

@Component({
  selector: 'app-backend-content',
  templateUrl: './backend-content.component.html',
  styleUrls: ['./backend-content.component.scss']
})
export class BackendContentComponent implements OnInit {

  @Input() decorator!: Decorator | undefined;
  dotAlign!: string;
  backgroundTextStyle!: {};

  constructor() {
  }

  ngOnInit(): void {
    this.dotAlign = `dots-${this.decorator?.dotsAlign}`;
    if (this.decorator?.text) {
      let align = this.decorator?.textAlign;
      if ('right' === align) {
        this.backgroundTextStyle = {left: `${this.decorator.textPosition}%`};
      } else {
        this.backgroundTextStyle = {right: `${this.decorator.textPosition}%`};
      }
    }
  }

}
