import React from 'react'
import Book from './Book'
import {
    Link
} from "react-router-dom"
const Search = ({ searchBooks, allSearchedBooks, updateBookCategory,isSearchLoading }) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link  className="close-search" to="/" >Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={searchBooks} />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        isSearchLoading ? ( 
                            allSearchedBooks.map((book) => (<Book key={book.id} book={book} updateBookCategory={updateBookCategory}></Book>)
                            )
                        ): (allSearchedBooks) 
                    }
                  
                </ol>
            </div>
        </div>
    )
}

export default Search;