import {Decorator} from './decorator';

export interface Article {
  id?: number;
  articleId: number;
  title: string;
  caption?: string;
  image: string;
  createdAt?: Date;
  decorator?: Decorator;
}
