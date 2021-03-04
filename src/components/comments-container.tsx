import React, { FC, useMemo } from "react";
import { ICommentsContainer } from "../models";
import { useHighlightAuthor } from "../hooks/highlight-author-hook";
import { AuthorContext } from "../context/author-context";
import { AuthorHighlightedComment } from "./author-highlighted-comment";
import { collectAuthors } from "../helpers/collect-authors";
import { Authors } from "./authors";

export const CommentContainer: FC<ICommentsContainer> = ({ data }) => {
  const [clickedAuthor, onChangeAuthor] = useHighlightAuthor();
  const authors = useMemo(() => collectAuthors(data), []);
  return (
    <AuthorContext.Provider value={clickedAuthor}>
      <Authors
        authors={authors}
        onClickAuthor={onChangeAuthor}
        chosen={clickedAuthor}
      />
      {data.map((c) => (
        <div key={c.message}>
          <AuthorHighlightedComment
            author={c.author}
            comments={c.comments}
            message={c.message}
            onAuthorClick={onChangeAuthor}
          />
        </div>
      ))}
    </AuthorContext.Provider>
  );
};
