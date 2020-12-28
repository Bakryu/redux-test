import React from "react";
import "./bookCard.css";
export default function BookCard() {
  return (
    <div className="card mb-3 main_book-card">
      <div className="row no-gutters card_wrapper ">
        <div className="col-xl-5 main_book-card__image">
          <img
            src="https://www.nypl.org/sites/default/files/8435321969_c1eea0631a_o.jpg"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-xl-7 card_content-wrapper">
          <div className="card-body">
            <h3 className="card-title book_label">Book name</h3>
            <h5>Автор:</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
