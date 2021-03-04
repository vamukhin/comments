export interface IComment {
  author: string;
  message: string;
  comments: IComment[];
}

export interface ICommentView {
  author: string;
  message: string;
  isHighlighted?: boolean;
  onAuthorClick: (author: string) => void;
}

export interface ICommentTree {
  author: string;
  message: string;
  isHighlighted?: boolean;
  bias?: number;
  onAuthorClick: (author: string) => void;
  comments: IComment[];
}

export interface ICommentsContainer {
  data: IComment[];
}

export interface IAuthors {
  authors: string[];
  chosen?: string;
  onClickAuthor: (arg: string) => void;
}
