import React from 'react'
import Book from './Book'
import {
    Link
  } from "react-router-dom"
const Bookshelf = ({shelfTitle, allBooks, updateBookCategory}) => {
    const bookCategory = allBooks.filter((book) => book.shelf === shelfTitle)
    return ( 
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {
                    bookCategory.map((book) => (<Book key={book.id} book={book} updateBookCategory={updateBookCategory}></Book>)
                       
                    )
                }
          </ol>
        </div>
      </div>
    )
}
export default Bookshelf;