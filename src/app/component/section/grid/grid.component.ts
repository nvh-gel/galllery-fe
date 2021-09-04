import {Component, OnInit} from '@angular/core';
import {Grid} from "../../../interface/grid";
import {GRIDS} from "../../../util/constatns";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grids: Grid[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.grids = GRIDS;
  }

}
