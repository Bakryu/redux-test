import { getBooks, deleteBookById } from "../services/bookService";
import { addBooksData,removeBook } from "../actions";

const fetchBookData = () => {
  return (dispatch) => {
    getBooks().then((data) => dispatch(addBooksData(data)));
  };
};

const deleteBook = (_id) => {
  return (dispatch) => {
      deleteBookById(_id).then(
          dispatch(removeBook(_id)));
  };
};
export { fetchBookData, deleteBook };
