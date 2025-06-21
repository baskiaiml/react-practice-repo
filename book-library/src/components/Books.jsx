import React, { useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useLocation } from "react-router-dom";

export default function Books() {
  const books = useContext(BooksContext);
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search") || '';
  const filteredBooks = books.filter(b=> b.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
