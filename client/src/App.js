import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import Authors from './comps/Authors';
import Books from './comps/Books';

function App() {

  let [books, setBooks] = useState([])
  let [authors, setAuthors] = useState([])

  let [shownBook, setShownBook] = useState({})

  useEffect(() => {

    async function fetchBooks() {
      let books = await fetch('/books')
      let booksData = await books.json()
      setBooks(booksData)
    }
    async function fetchAuthors() {
      let authors = await fetch('/authors')
      let authorsData = await authors.json()
      setAuthors(authorsData)
    }

    fetchBooks()
    fetchAuthors()

  }, [])

  function getAuthor(authId) {
    let author = authors.filter(auth => auth.id == authId)
    author = author[0].firstName + " " + author[0].lastName
    return author
  }

  return (
    <div className="container-fluid">
      <div className="text-center">

        <h1>Welcome to skimarztki :)</h1>
        {(() => {
          if (Object.keys(shownBook).length !== 0) {
            return (
              <div className="row">
                <div className="col-6">
                  Selected book:
                  <br></br>
                  Name: {shownBook.bookName}
                  <br></br>
                  Serial number: {shownBook.isbn}
                  <br></br>
                  Author: {getAuthor(shownBook.authorId)}
                </div>
                <div className="col-6">

                </div>
              </div>
            )
          }
        })()}
        <div className="row">
          <div className="col-6">
            <Books setShownBook={setShownBook} bookList={books}></Books>
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
