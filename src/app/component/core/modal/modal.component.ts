import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title!: string;
  @Input() header!: boolean;

  constructor(private modalService: NgbModal) {
  }

  close() {
    this.modalService.dismissAll();
  }
}
