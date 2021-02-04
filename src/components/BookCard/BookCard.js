import React from "react";
import "./bookCard.css";
import { Link } from "react-router-dom";
export default function BookCard(props) {
  const { id, label, author, description, logo } = props;
  return (
    <Link id={id} className="card mb-3 main_book-card" to={`/books/:${id}`}>
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
    </Link>
  );
}
