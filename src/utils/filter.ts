import Filter from "bad-words";

const filter = new Filter();
export const filterBadWords = (text: string): string => {
  const words = text.split(" ");
  return words
    .map((word) => (filter.isProfane(word) ? "x".repeat(word.length) : word))
    .join(" ");
};
