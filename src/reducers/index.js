export function rootReducer(state = {}, action) {
  switch (action.type) {
    case "BOOKS_DATA":
      return { booksData: action.booksData};

    default:
      return state;
  }
}
