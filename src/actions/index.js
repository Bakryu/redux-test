export function fetchBookData({ books }) {
  return {
    type: "BOOKS_DATA",
    booksData: books,
  };
}
