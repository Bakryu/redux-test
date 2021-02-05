import React from "react";
import BookCard from "../components/BookCard/BookCard";
import "./main.css";

export default function Main(props) {
  const { booksData = [] } = props;
  const bookList = booksData.map((book) => {
    const {
      _id,
      label = "Название не указано",
      author = "Автор не указан",
      description = "Нет описания",
      logo = "https://www.nypl.org/sites/default/files/8435321969_c1eea0631a_o.jpg",
    } = book;
    return (
      <BookCard
        key={_id}
        id={_id}
        label={label}
        author={author}
        description={description}
        logo={logo}
      />
    );
  });
  return booksData ? (
    <section className="container main-page">{bookList}</section>
  ) : (
    <div className="spinner-border text-primary spinner" role="status">
      <span className="sr-only "></span>
    </div>
  );
}
