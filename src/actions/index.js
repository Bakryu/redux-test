

const addBooksData = function (data) {
  return { type: "ADD_BOOKS_DATA", payLoad: data.books }
  
}
const removeBook = function (id) {
  return { type: "DELETE_BOOK", payLoad:id }
  
}


export {addBooksData,removeBook}
