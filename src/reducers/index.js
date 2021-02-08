export function rootReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_BOOKS_DATA":
      return { ...state, booksData: action.payLoad };

    case "DELETE_BOOK":
      const books = state.booksData;
      const index = books.findIndex((book) => book._id === action.payLoad);
      return {
        ...state,
        booksData: [...books.slice(0, index), ...books.slice(index + 1)],
      };

    default:
      return state;
  }
}
