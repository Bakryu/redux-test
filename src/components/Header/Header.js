import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          BookMarket
        </Link>

        <div
          className="collapse navbar-collapse d-flex justify-content-end nav-bar_with"
          id="navbarNav"
        >
          <ul className="navbar-nav nav_flex-direction__row">
            <li className="nav-item">
              <Link
                className="nav-link active nav-item"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-item" to="/create">
                Create Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link  nav-item"
                to="/update"
                tabIndex="-1"
                aria-disabled="true"
              >
                Update Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
