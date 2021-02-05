import React from "react";
import "./book.css";

export default function Book({ booksData }) {
  const bookHref = window.location.href;
  const bookId = bookHref.substr(-24);
  if (booksData) {
    let book = booksData.find((book) => book._id === bookId);
    console.log(booksData);
    const { label, author, description, logo } = book;
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
          <button type="button" className="section-book-button btn btn-danger ">
            Delete book
          </button>
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
}
