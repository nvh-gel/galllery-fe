import {Component, OnInit} from '@angular/core';
import {Article} from "../../../interface/article";
import {ArticleService} from "../../../service/article/article.service";
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  slides!: Article[];
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 3}, 1200: {items: 4},},
    autoplay: true,
    autoplaySpeed: 700,
    lazyLoad: true,
  };

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.slides = this.articleService.getArticleForHeroSlides();
  }
}
