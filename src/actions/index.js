const addBooksData = function (data) {
  return { type: "ADD_BOOKS_DATA", payLoad: data.books };
};
const removeBook = function (id) {
  return { type: "DELETE_BOOK", payLoad: id };
};
const showBook = function (id) {
  return { type: "SHOW_BOOK", payLoad: id };
};
const toggleSuccessAlert = function () {
  return { type: "SUCCESS_ALERT" };
};
const toggleGoMainAlert = function () {
  return { type: "GO_TO_MAIN" };
};
const cleanBookPage = function () {
  return { type: "CLEAN_BOOK_PAGE" };
};

export { addBooksData, removeBook, showBook,toggleSuccessAlert,toggleGoMainAlert,cleanBookPage };
