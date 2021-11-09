import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import Authors from './comps/Authors';
import Books from './comps/Books';

function App() {

  let [books, setBooks] = useState([])
  let [authors, setAuthors] = useState([])

  let [shownBook, setShownBook] = useState({})
  let [shownAuthor, setShownAuthor] = useState({})

  useEffect(() => {

    async function fetchBooks() {
      let books = await fetch('/books')
      let booksData = await books.json()
      console.log(booksData);
      setBooks(booksData)
    }
    async function fetchAuthors() {
      let authors = await fetch('/authors')
      let authorsData = await authors.json()
      console.log(authorsData);
      setAuthors(authorsData)
    }

    fetchBooks()
    fetchAuthors()

  }, [])

  return (
    <div className="container-fluid">
      <div className="text-center">

        <h1>Welcome to skimarztki :)</h1>
        <div className="row">
          <div className="col">
            
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Books bookList={books}></Books>
          </div>
          <div className="col-6">
            <Authors authorList={authors}></Authors>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
