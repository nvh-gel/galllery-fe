import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../interface/article";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ArticleDetailComponent} from "../../section/section";

@Component({
  selector: 'app-show-case-article',
  templateUrl: './show-case-article.component.html',
  styleUrls: ['./show-case-article.component.scss']
})
export class ShowCaseArticleComponent implements OnInit {

  @Input() article!: Article;
  @Input() id!: number | undefined;
  margin!: string;
  @Input() total!: number;
  maxWidth!: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.margin = `mt-${this.article.decorator?.marginTop}`;
    this.maxWidth = `max-width-${this.article.decorator?.maxWidth}`;

  }

  openDetail() {
    const modalRef = this.modalService.open(
      ArticleDetailComponent,
      {size: "xxl"}
    );
    modalRef.componentInstance.article = this.article;
  }
}
