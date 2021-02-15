import { connect } from "react-redux";
import React, { useEffect } from "react";
import "./book.css";
import AlertGoToHero from "../components/AlertGoToHero";
import Update from "../pages/Update";
import { deleteBook } from "../operations";
import { useHistory } from "react-router-dom";
import {
  showBook,
  toggleGoMainAlert,
  toggleSuccessAlert,
  cleanBookPage,
  changeIsUpdate,
} from "../actions";

const Book = function ({
  pageOfBook,
  booksData,
  deleteThisBook,
  showBook,
  toggleSuccessAlert,
  cleanBookPage,
  isUpdate,
  updateBook,
}) {
  useEffect(() => {
    showBook();
  }, [booksData, pageOfBook.book]);
  const history = useHistory();
  const fn = () => {
    history.push("/");
  };

  console.log(pageOfBook);
  if (pageOfBook.book) {
    let { book, successAlert, goMainAlert } = pageOfBook;
    const {
      _id: id,
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
            onClick={updateBook}
          >
            Change book
          </button>
          <button
            type="button"
            className="section-book-button btn btn-danger "
            onClick={toggleSuccessAlert}
          >
            Delete book
          </button>
        </div>

        <div
          className={`alert-book-decoration alert-delete-book ${
            successAlert && `open`
          } `}
        >
          <span className="success-title">
            Вы действительно хотите удалить эту книгу?
          </span>
          <div className="book-btn-wrapper">
            <button
              type="button"
              className="section-book-button btn btn-danger "
              onClick={() => {
                console.log(id);
                deleteThisBook(id);
              }}
            >
              Yes
            </button>
            <button
              onClick={toggleSuccessAlert}
              type="button"
              className="section-book-button btn btn-primary "
            >
              No
            </button>
          </div>
        </div>
        <AlertGoToHero
          goMainAlert={goMainAlert}
          cleanBookPage={() => {
            cleanBookPage(fn);
          }}
          alertTitle={"Книга успешно удалена"}
        />
        {isUpdate && <Update bookId={id} />}
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
  return {
    pageOfBook: state.pageOfBook,
    booksData: state.booksData,
    isUpdate: state.isUpdate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteThisBook: (id) => {
      dispatch(deleteBook(id));
      dispatch(toggleGoMainAlert());
    },
    showBook: () => {
      const bookHref = window.location.href;
      const bookId = bookHref.substr(-24);
      dispatch(showBook(bookId));
    },

    toggleSuccessAlert: () => {
      dispatch(toggleSuccessAlert());
    },
    cleanBookPage: (callback) => {
      dispatch(cleanBookPage());
      callback();
    },
    updateBook: () => {
      dispatch(changeIsUpdate());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
