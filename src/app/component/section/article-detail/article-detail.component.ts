import {Component} from '@angular/core';
import {Article} from "../../../interface/article";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
  article!: Article;
}
