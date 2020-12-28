import React from "react";
import BookCard from "../components/BookCard/BookCard";
import "./main.css";

export default function Main() {
  return (
    <section className="container main-page">
      <BookCard />
      <BookCard />
      <BookCard />
    </section>
  );
}
