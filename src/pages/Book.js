import React from "react";

export default function Book({ booksData }) {
  const bookHref = window.location.href;
  const bookId = bookHref.substr(-24);

  if (booksData) {
    let book = booksData.find((book) => book._id == bookId);
    console.log(booksData);
    const { label, author, description, logo } = book;
    return (
      <section className="container book-section">
        <div className="row no-gutters card_wrapper ">
          <div className="col-xl-5 main_book-card__image">
            <img src={logo} className="card-img" alt="..." />
          </div>
          <div className="col-xl-7 card_content-wrapper">
            <div className="card-body">
              <h3 className="card-title book_label">{label}</h3>
              <h5>Автор: {author}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <span>spinner</span>;
  }
}

