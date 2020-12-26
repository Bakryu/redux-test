import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          BookMarket
        </Link>

        <div
          className="collapse navbar-collapse d-flex justify-content-end "
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/update"
                tabindex="-1"
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
