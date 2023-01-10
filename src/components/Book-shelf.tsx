import React from 'react'
import Book from './Book'
import BookModel from '../models/book-model'
const Bookshelf: React.FC<{shelfTitle:string,allBooks: BookModel[]}> = ({shelfTitle, allBooks}) => {
    const bookCategory = allBooks.filter((book) => book.shelf === shelfTitle)
    return ( 
        <div className="bookshelf">
        <h2 id="shelfTitle" className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {
                    bookCategory.map((book) => (<Book key={book.id} book={book}></Book>)
                       
                    )
                }
          </ol>
        </div>
      </div>
    )
}
export default Bookshelf;