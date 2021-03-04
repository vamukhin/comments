import React, { FC, useContext } from "react";
import { ICommentTree } from "../models";
import { Comment } from "./comment";
import { AuthorContext } from "../context/author-context";

export const AuthorHighlightedComment: FC<ICommentTree> = (props) => {
  const { author, bias = 1, comments, onAuthorClick } = props;
  const clickedAuthor = useContext(AuthorContext);
  return (
    <>
      <Comment {...props} isHighlighted={author === clickedAuthor} />
      {comments.map((c) => (
        <div key={c.message} style={{ marginLeft: `${bias * 10}px` }}>
          <AuthorHighlightedComment
            author={c.author}
            bias={bias + 1}
            message={c.message}
            comments={c.comments}
            isHighlighted={false}
            onAuthorClick={onAuthorClick}
          />
        </div>
      ))}
    </>
  );
};
