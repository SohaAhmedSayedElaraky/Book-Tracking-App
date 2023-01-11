import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './models/book-model'
import Search from './pages/Search'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    bookSearchText: '',
    searchedBooks: [],
    isSearchLoading: false
  }

  

  search = async (event:any) => {
   await this.setState({
      bookSearchText: event.target.value
    })
    this.getSearchedBooks(this.state.bookSearchText)
  }

  getSearchedBooks = async (searchText: string) => {
   await BooksAPI.search(searchText).then((response) => {
    if(response && !response.error) {
      this.setState({
      searchedBooks: response.map((data: Book) => {
        this.state.books.forEach((item:Book) => {
          if(data.id === item.id) {
            data.shelf = item.shelf;
          }
        })
        return data
      }),
        isSearchLoading: true
       })
    }
    else {
      this.setState({
        searchedBooks: 'there is no books',
        isSearchLoading: false
       })
    }
    
   })
  }

  render() {
    return (
      <div className="app">
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search searchBooks= {this.search} isSearchLoading={this.state.isSearchLoading} allSearchedBooks={this.state.searchedBooks}/>} />
      </Routes>
    </BrowserRouter>
      </div>
   

        

    )
  }
}

export default BooksApp
