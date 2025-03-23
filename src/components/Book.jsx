import React, { useState } from "react";
import "./Book.css";

const Book = ({ book }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {showDescription && <p className="description">{book.description}</p>}
    </div>
  );
};

export default Book;
