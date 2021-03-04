import React, { FC } from "react";
import { IAuthors } from "../models";
import styles from "../styles.module.css";

export const Authors: FC<IAuthors> = ({ authors, onClickAuthor, chosen }) => (
  <div className={styles.namesContainer}>
    {authors.map((a) => (
      <span
        className={`${styles.name} ${chosen === a ? styles.highlighted : ""}`}
        onClick={() => onClickAuthor(a)}
        key={a}
      >
        {a}
      </span>
    ))}
  </div>
);
