import React from 'react'
import BookList from './BookList'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  }

  // Life Cycle event call
  componentDidMount() {
    this.getBooks()
  }

  // API request to BooksAPI.js function
  getBooks = () =>
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })

  // Update shelf for books based on user selection
  updateShelf = (book, shelf) =>
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })

  searchBooks = (query, number = 20) => BooksAPI.search(query, number).then(() => {
    BooksAPI.getAll().then(books => {
      this.setState({searchBooks: books})
    })
  })

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <Search
              onSearch={this.searchBooks}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <BookList
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
