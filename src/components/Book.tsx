import React, { Component } from 'react'
import BookModel from '../models/book-model'
import * as BooksAPI from '../BooksAPI'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../state/action-creators/actionCreators'
import { RootState } from '../state/reducers';

  const Book: React.FC<{book:BookModel}> = ({book}) => {
    const dispatch = useDispatch();
    const { updateBookCategory } = bindActionCreators(actionCreators, dispatch)
    const { getAllBooks } = bindActionCreators(actionCreators, dispatch);
    let AllBooks: BookModel[] = useSelector((state: RootState) => state.book)
     const  updateBookShelf = (event:any) => {
      updateBookCategory(book,event.target.value)
      updateSelectedBook(book, event.target.value)
     }
     const updateSelectedBook = (book: BookModel, shelf: any) => {
      BooksAPI.update(book, shelf).then((updatedBook:any) => {
        BooksAPI.getAll().then((books:any) => {
          getAllBooks(books)
          return AllBooks = books
        })
      })
    }
     let imageUrl: any;
     book.imageLinks? imageUrl= book.imageLinks.smallThumbnail : imageUrl = ''
        return (
            <ol className="books-grid">
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})` }}></div>
                  <div className="book-shelf-changer">
                    <select onChange={updateBookShelf} value= {book.shelf?book.shelf: 'none' }>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          </ol>
        ) 
    }
   
    export default Book; 
  
  
   

