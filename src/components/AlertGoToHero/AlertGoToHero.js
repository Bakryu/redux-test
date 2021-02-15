import React from "react";
import "./alertGoToHero.css";

export default function AlertGoToHero({
  goMainAlert,
  cleanBookPage,
  alertTitle,
}) {
  return (
    <div
      className={`alert-book-decoration alert-delete-success ${
        goMainAlert && `open`
      }`}
    >
      <span className="success-title">{alertTitle}</span>
      <div className="book-btn-wrapper">
        <button
          type="button"
          className="section-book-button btn btn-success "
          onClick={cleanBookPage}
        >
          Оk
        </button>
      </div>
    </div>
  );
}
