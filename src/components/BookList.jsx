import React, { useState } from "react";
import Book from "./Book";
import "./BookList.css";

const booksData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    description: "A novel about the American Dream.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    description: "A story of racial injustice in the Deep South.",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    description: "A dystopian novel about a totalitarian regime.",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    description: "A historical novel that tells the story of Napoleon’s invasion of Russia.",
  },
  {
    title: "A Suitable Boy",
    author: "Vikram Seth",
    year: 1993,
    description: "A sprawling novel set in post-independence India, exploring themes of love, politics, and tradition.",
  },
  {
    title: "Shantaram",
    author: "Gregory David Roberts",
    year: 2003,
    description: "An epic novel based on true events, following an Australian fugitive in the underworld of Bombay.",
  },
  {
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    year: 2008,
    description: "A retelling of the Mahabharata from Draupadi's perspective.",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    year: 1880,
    description: "A deep philosophical novel exploring morality, free will, and faith.",
  },
  {
    title: "Midnight’s Children",
    author: "Salman Rushdie",
    year: 1981,
    description: "A magical realism novel that intertwines India's history with the protagonist's life.",
  },
  {
    title: "Mahabharata",
    author: "Vyasa",
    year: "Ancient",
    description: "One of the greatest Indian epics, telling the story of the Kurukshetra war and the fate of the Kaurava and Pandava princes.",
  },
];


const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list-container">
      <input
        type="text"
        placeholder="🔍 Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => <Book key={index} book={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default BookList;
