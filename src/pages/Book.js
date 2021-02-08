import { connect } from "react-redux";
import React from "react";
import "./book.css";
import { deleteBook } from "../operations";

const Book = function ({ booksData, deleteThisBook, toggleAlert }) {
  const bookHref = window.location.href;
  const bookId = bookHref.substr(-24);
  let book = booksData.find((book) => book._id === bookId);
  if (book) {
    const {
      _id,
      label = "Название не указано",
      author = "Автор не указан",
      description = "Нет описания",
      logo = "https://www.nypl.org/sites/default/files/8435321969_c1eea0631a_o.jpg",
    } = book;
    return (
      <section className="container book-section">
        <div className="row no-gutters book-card_wrapper ">
          <div className="col-xl-5 section-book-card__image">
            <img src={logo} className="card-img" alt="..." />
          </div>
          <div className="col-xl-7 book-card_content-wrapper">
            <div className="book-card-body">
              <h3 className="book-card-title book_label">{label}</h3>
              <h5 className="book-card-author">Автор: {author}</h5>
              <p className="book-card-text">{description}</p>
            </div>
          </div>
        </div>
        <div className="book-btn-wrapper">
          <button
            type="button"
            className="section-book-button btn btn-primary "
          >
            Change book
          </button>
          <button
            type="button"
            className="section-book-button btn btn-danger "
            onClick={() => {
              toggleAlert(".alert-delete-book");
            }}
          >
            Delete book
          </button>
        </div>

        <div className="alert-book-decoration alert-delete-book">
          <span className="success-title">
            Вы действительно хотите удалить эту книгу?
          </span>
          <div className="book-btn-wrapper">
            <button
              type="button"
              className="section-book-button btn btn-danger "
              onClick={() => {
                deleteThisBook(_id, ".alert-delete-success");
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                toggleAlert(".alert-delete-book");
              }}
              type="button"
              className="section-book-button btn btn-primary "
            >
              No
            </button>
          </div>
        </div>

        <div className="alert-book-decoration alert-delete-success">
          <span className="success-title">Книга успешно удалена</span>
          <div className="book-btn-wrapper">
            <button
              type="button"
              className="section-book-button btn btn-success "
              to="/"
            >
              Оk
            </button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="spinner-border text-primary spinner" role="status">
        <span className="sr-only "></span>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { booksData: state.booksData };
};
const mapDispatchToProps = (dispatch) => {
  const toggleSelector = (selector) => {
    const alertItem = document.querySelector(selector);
    alertItem.classList.toggle("open");
  };

  return {
    deleteThisBook: (_id, selector) => {
      dispatch(deleteBook(_id));
      toggleSelector(selector);
    },
    toggleAlert: (selector) => {
      toggleSelector(selector);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
