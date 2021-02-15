import React from "react";
import { Link } from "react-router-dom";
import "./alertGoToHero.css"

export default function AlertGoToHero({ goMainAlert, cleanBookPage, alertTitle }) {
  return (
    <div
      className={`alert-book-decoration alert-delete-success ${
        goMainAlert && `open`
      }`}
    >
          <span className="success-title">{ alertTitle}</span>
      <div className="book-btn-wrapper">
        <Link to="/">
          <button
            type="button"
            className="section-book-button btn btn-success "
            onClick={cleanBookPage}
          >
            Оk
          </button>
        </Link>
      </div>
    </div>
  );
}
