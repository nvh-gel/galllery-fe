import {Component, Input} from '@angular/core';
import {ShowCaseData} from "../../../interface/show-case-data";

@Component({
  selector: 'app-show-case-content',
  templateUrl: './show-case-content.component.html',
  styleUrls: ['./show-case-content.component.scss']
})
export class ShowCaseContentComponent {

  @Input() rowData!: ShowCaseData;
}
