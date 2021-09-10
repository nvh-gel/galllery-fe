export interface Article {

  id?: number;
  articleId: number;
  title: string;
  caption?: string;
  image: string;
  createdAt?: Date;
  decorator?: Decorator;
}

export interface Decorator {
  marginTop?: number;
  maxWidth?: number;
  dots?: boolean;
  dotsAlign?: string;
  dotRotate?: boolean;
  text?: string;
  textAlign?: string;
  textPosition?: number;
}
