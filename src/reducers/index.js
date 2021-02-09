const initialState = { booksData: [], pageOfBook: {} };

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKS_DATA":
      return { ...state, booksData: action.payLoad };

    case "SUCCESS_ALERT":
      return {
        ...state,
        pageOfBook: {
          ...state.pageOfBook,
          successAlert: !state.pageOfBook.successAlert,
        },
      };

    case "GO_TO_MAIN":
      return {
        ...state,
        pageOfBook: {
          ...state.pageOfBook,
          goMainAlert: !state.pageOfBook.goMainAlert,
        },
      };

    case "SHOW_BOOK":
      const book = state.booksData.find((book) => book._id === action.payLoad);
      if (book) {
        return {
          ...state,
          pageOfBook: { book: book, successAlert: false, goMainAlert: false },
        };
      } else {
        return state;
      }
    case "CLEAN_BOOK_PAGE":
      return {
        ...state,
        pageOfBook: {
          book: undefined,
          successAlert: false,
          goMainAlert: false,
        },
      };

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
