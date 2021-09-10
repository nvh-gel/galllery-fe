import {Component, Input} from '@angular/core';
import {Decorator} from "../../../interface/decorator";

@Component({
  selector: 'app-backend-content',
  templateUrl: './backend-content.component.html',
  styleUrls: ['./backend-content.component.scss']
})
export class BackendContentComponent {

  @Input() decorator!: Decorator | undefined;
}
