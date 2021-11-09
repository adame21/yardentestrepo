import React from 'react'
import { useState, useEffect } from 'react'


function Authors(props) {


    return (
        <React.Fragment>
            <h1>Author List</h1>
            {props.authorList.map((author, i) => {
                return (
                    <div>
                        <label key={i} >{`${author.firstName} ${author.lastName}`}</label>
                    </div>
                )
            })}
        </React.Fragment>
    )

}

export default Authors