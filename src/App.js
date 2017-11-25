import React from 'react'
import BookList from './BookList'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // API request to BooksAPI.js
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <Search />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <BookList
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
