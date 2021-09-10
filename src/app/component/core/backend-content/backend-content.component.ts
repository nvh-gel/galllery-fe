import {Component, Input, OnInit} from '@angular/core';
import {Decorator} from "../../../interface/decorator";

@Component({
  selector: 'app-backend-content',
  templateUrl: './backend-content.component.html',
  styleUrls: ['./backend-content.component.scss']
})
export class BackendContentComponent implements OnInit {

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
