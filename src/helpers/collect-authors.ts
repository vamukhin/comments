import { IComment } from "../models";

export function collectAuthors(comments: IComment[]): string[] {
  const authors = new Set<string>();

  function processComment(coms: IComment[]) {
    coms.forEach((c) => {
      authors.add(c.author);
      processComment(c.comments);
    });
  }

  processComment(comments);

  return Array.from(authors);
}
