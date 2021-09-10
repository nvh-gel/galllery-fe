import {Component, OnInit} from '@angular/core';
import {Decorator} from "../../../interface/decorator";

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  decorator!: Decorator

  ngOnInit(): void {
    this.decorator = {
      text: 'Dream',
      textAlign: 'right',
      textPositionX: -3,
      textPositionY: -30,
    }
  }
}
