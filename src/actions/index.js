import { getBooks, deleteBookById } from "../services/bookService";

const fetchBookData = () => {
  return (dispatch) => {
    getBooks().then((data) =>
      dispatch({ type: "BOOKS_DATA", booksData: data.books })
    );
  };
};
const deleteBook = (_id) => {
  return (dispatch) => {
    deleteBookById(_id);
  };
};
export { fetchBookData, deleteBook };
