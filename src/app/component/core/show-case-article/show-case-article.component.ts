import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../interface/article";


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

  constructor() {
  }

  ngOnInit(): void {
    this.margin = `mt-${this.article.styles?.marginTop}`;
    this.maxWidth = `max-width-${this.article.styles?.maxWidth}`;
  }
}
