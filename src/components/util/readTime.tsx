import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime(tree: unknown, { data }: any) {
  const textOnPage = toString(tree);
  const readingTime = getReadingTime(textOnPage);
  return readingTime.text;
}
