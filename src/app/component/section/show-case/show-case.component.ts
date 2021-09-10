import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../service/article/article.service";
import {ShowCaseData} from "../../../interface/show-case-data";

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

  rows!: ShowCaseData[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.rows = this.articleService.getArticleForShowCase();
  }
}
