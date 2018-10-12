import React from 'react'
import {Route} from 'react-router-dom'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    currentResults: []
  }

  componentWillMount() {
    BooksAPI.getAll().then((returns) => {
      this.setState(() =>({books: returns}))
    })
  }

  updateLibrary = (book, e) => {
    BooksAPI.update(book, e.target.value).then(
      BooksAPI.getAll().then((returns) => {
        this.setState(() =>({books: returns}))
      })
    )
  }

  searchUpdate = (e) => {
    BooksAPI.search(e.target.value).then((returned) => {
      this.setState(() =>({currentResults: returned}))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf 
            books={this.state.books}
            updateLibrary={(book, e) => {
              this.updateLibrary(book, e)
            }}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            currentResults={this.state.currentResults} 
            searchUpdate={(e) => {
              this.searchUpdate(e)
            }}
            updateLibrary={(book, e) => {
              this.updateLibrary(book, e)
            }}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp