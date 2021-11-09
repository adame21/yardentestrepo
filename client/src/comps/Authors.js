import React from 'react'
import { useState, useEffect } from 'react'


function Authors(props) {


    return (
        <React.Fragment>
            <h1>Author List</h1>
            {props.authorList.map((author, i) => <label key={i} >{`${author.firstName} ${author.lastName}`}</label>)}
        </React.Fragment>
    )

}

export default Authors