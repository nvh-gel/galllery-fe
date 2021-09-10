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
