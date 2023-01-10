import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Link
  } from "react-router-dom"
import { bindActionCreators } from 'redux'
import Bookshelf from '../components/Book-shelf'
import BookModel from '../models/book-model'
import { RootState } from '../state/reducers'
import * as BooksAPI from '../BooksAPI'
import * as actionCreators from '../state/action-creators/actionCreators'
const Home: React.FC = () => {
  let AllBooks: BookModel[] = useSelector((state: RootState) => state.book)
  const dispatchBooks = useDispatch();
  const { getAllBooks } = bindActionCreators(actionCreators, dispatchBooks);
  useEffect(() => {
    BooksAPI.getAll().then((books:any) => {
      getAllBooks(books)
      return AllBooks = books
    })
  }, []);
    return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
             <Bookshelf shelfTitle='currentlyReading' allBooks={AllBooks}  ></Bookshelf>
             <Bookshelf shelfTitle='wantToRead' allBooks={AllBooks} ></Bookshelf>
             <Bookshelf shelfTitle='read' allBooks={AllBooks} ></Bookshelf>
              </div>
            </div>
            <div className="open-search">
              <Link className='add-book-btn' to="/Search">Add a book</Link>
            </div>
          </div>
          
    )
    
}

export default Home;
