import { getBooks, deleteBookById } from "../services/bookService";
import { addBooksData,removeBook } from "../actions";

const fetchBookData = () => {
  return (dispatch) => {
    getBooks().then((data) => dispatch(addBooksData(data)));
  };
};

const deleteBook = (id) => {
  return (dispatch) => {
      deleteBookById(id).then(
          dispatch(removeBook(id)));
  };
};
export { fetchBookData, deleteBook };
