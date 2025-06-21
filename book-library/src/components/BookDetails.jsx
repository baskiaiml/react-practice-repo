import React, { useContext } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";
export default function BookDetails() {
  const books = useContext(BooksContext);

  const { bookId } = useParams();

  const book = books.find((b) => b.id === parseInt(bookId));

  if (books.length === 0) {
    return <div>Loading....</div>;
  }
  if (!book) {
    return <div>Book Not Found</div>;
  }

  return (
    <>
      <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
      </div>
    </>
  );
}
