export interface Article {

  id?: number;
  articleId: number;
  title: string;
  caption?: string;
  image: string;
  createdAt?: Date;
  backEnd?: BackEnd;
  styles?: Style;
}

interface Style {
  marginTop?: number;
  maxWidth?: number;
}

interface BackEnd {
  dots?: boolean;
  dotsAlign?: string;
  text?: string;
  textAlign?: string;
  textPosition?: number;
}
