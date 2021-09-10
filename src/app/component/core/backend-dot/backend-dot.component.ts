import {Component, Input, OnInit} from '@angular/core';
import {Decorator} from "../../../interface/decorator";

@Component({
  selector: 'app-backend-dot',
  templateUrl: './backend-dot.component.html',
  styleUrls: ['./backend-dot.component.scss']
})
export class BackendDotComponent implements OnInit {

  @Input() decorator!: Decorator | undefined;
  dotAlign!: string;
  dotRotate!: string;

  ngOnInit(): void {
    this.dotAlign = `dots-${this.decorator?.dotsAlign === 'right' ? 'right' : 'left'}`;
    this.dotRotate = this.decorator?.dotRotate ? 'rotate' : '';
  }
}
