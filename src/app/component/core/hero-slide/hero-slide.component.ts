import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../interface/article";


@Component({
  selector: 'app-hero-slide',
  templateUrl: './hero-slide.component.html',
  styleUrls: ['./hero-slide.component.scss']
})
export class HeroSlideComponent implements OnInit {

  @Input() slide!: Article;
  background!: any;

  ngOnInit(): void {
    this.background = {
      'background-image': `url(${this.slide.image})`
    }
  }
}
