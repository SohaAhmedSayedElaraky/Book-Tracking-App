import React from 'react'
import {
    Link
} from "react-router-dom"
import Book from '../components/Book';
import BookModel from '../models/book-model'
const Search : React.FC<{searchBooks:any, allSearchedBooks: any, isSearchLoading:boolean}> = ({searchBooks, allSearchedBooks, isSearchLoading }) => {
    
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={searchBooks} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {isSearchLoading ? (
                        allSearchedBooks.map((book: BookModel) => (<Book key={book.id} book={book}></Book>)
                        )
                    ) : (allSearchedBooks)}
    
                </ol>
            </div>
        </div>
        )
}
   


export default Search;