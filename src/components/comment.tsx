import React, { FC } from "react";
import { ICommentView } from "../models";
import styles from "../styles.module.css";

export const Comment: FC<ICommentView> = ({
  author,
  message,
  onAuthorClick,
  isHighlighted,
}) => (
  <div className={styles.comment}>
    <strong
      className={`${styles.name} ${isHighlighted ? styles.highlighted : ""}`}
      onClick={() => onAuthorClick(author)}
    >
      {author}
    </strong>
    <br />
    <p>{message}</p>
  </div>
);
