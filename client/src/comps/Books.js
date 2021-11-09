import React from 'react'
import { useState, useEffect } from 'react'

function Books(props) {

    async function fetchSelectedBooks(ev) {
        let id = ev.target.getAttribute("name")
        let specificBook = await fetch('/book/' + id)
        let specificBookData = await specificBook.json()
        props.setShownBook(specificBookData)
    }

    return (
        <React.Fragment>
            <h1>Book List</h1>

            {props.bookList.map((book, i) => {
                return (
                    <div>
                        <label onClick={fetchSelectedBooks} key={i} name={book.id} >{book.bookName}</label>
                    </div>
                )
            })}
        </React.Fragment>
    )

}

export default Books