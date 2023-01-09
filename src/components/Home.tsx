import React from 'react'
import Bookshelf from './Book-shelf'
import {
    Link
  } from "react-router-dom"
import BookModel from '../models/book-model'
const Home: React.FC<{allBooks:BookModel[],updateBookCategory: any}> = ({allBooks,updateBookCategory}) => {
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
             <Bookshelf shelfTitle='currentlyReading' allBooks={allBooks} updateBookCategory={updateBookCategory} ></Bookshelf>
             <Bookshelf shelfTitle='wantToRead' allBooks={allBooks} updateBookCategory={updateBookCategory}></Bookshelf>
             <Bookshelf shelfTitle='read' allBooks={allBooks} updateBookCategory={updateBookCategory}></Bookshelf>
              </div>
            </div>
            <div className="open-search">
              <Link className='add-book-btn' to="/Search">Add a book</Link>
            </div>
          </div>
          
    )
    
}

export default Home;
