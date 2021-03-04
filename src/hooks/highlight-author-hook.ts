import { useCallback, useRef, useState } from "react";

export function useHighlightAuthor(): [
  string | undefined,
  (arg: string) => void
] {
  const intId = useRef<ReturnType<typeof setTimeout> | undefined>();
  const [author, change] = useState<string | undefined>();
  const onChangeAuthor = useCallback(
    (authorName?: string) => {
      if (intId.current) {
        clearTimeout(intId.current);
      }

      change(authorName);
      intId.current = setTimeout(() => {
        change(undefined);
      }, 3000);
    },
    [author, intId.current, change]
  );

  return [author, onChangeAuthor];
}
