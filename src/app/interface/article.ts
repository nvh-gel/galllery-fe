export interface Article {

  id?: number;
  articleId: number;
  title: string;
  caption?: string;
  image: string;
  createdAt?: Date;
  backgroundText?: string;
  styles?: Style;
}

interface Style {
  marginTop?: number;
}
