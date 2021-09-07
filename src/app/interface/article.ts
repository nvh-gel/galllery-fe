export interface Article {

  id?: number;
  articleId: number;
  title: string;
  caption?: string;
  image: string;
  createdAt?: Date;
  decorator?: decorator;
}

interface decorator {
  marginTop?: number;
  maxWidth?: number;
  dots?: boolean;
  dotsAlign?: string;
  text?: string;
  textAlign?: string;
  textPosition?: number;
}
