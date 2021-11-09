import React from 'react'
import { useState, useEffect } from 'react'

function Books(props) {

    

    return (
        <React.Fragment>
            <h1>Book List</h1>

            {props.bookList.map((book, i) => <label key={i} >{book.bookName}</label>)}
        </React.Fragment>
    )

}

export default Books