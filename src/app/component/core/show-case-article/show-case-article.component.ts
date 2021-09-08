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
  dotAlign!: string;
  backgroundTextStyle!: {};

  constructor() {
  }

  ngOnInit(): void {
    this.margin = `mt-${this.article.decorator?.marginTop}`;
    this.maxWidth = `max-width-${this.article.decorator?.maxWidth}`;
    this.dotAlign = `dots-${this.article.decorator?.dotsAlign}`;
    if (this.article.decorator?.text) {
      let align = this.article.decorator?.textAlign;
      if ('right' === align) {
        this.backgroundTextStyle = {left: `${this.article.decorator.textPosition}%`};
      } else {
        this.backgroundTextStyle = {right: `${this.article.decorator.textPosition}%`};
      }
    }
  }
}
