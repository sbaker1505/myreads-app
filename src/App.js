import React from 'react'
import BookList from './BookList'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    category: [
      {
        title: 'Currently Reading',
        id: 'currentlyReading'
      },
      {
        title: 'Want to Read',
        id: 'wantToRead'
      },
      {
        title: 'Read',
        id: 'read'
      },
      {
        title: 'None',
        id: 'none'
      }
    ]
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

  searchBooks = (query, maxResults = 20) => {query &&
    BooksAPI.search(query, maxResults).then(books => {
      this.setState({searchBooks: books})
  })}

  render() {
    return (
      <div className="app">
        <Route
          path='/search'
          render={({ history }) => (
            <Search
              bookCategory={this.state.category}
              books={this.state.searchBooks}
              onSearch={this.searchBooks}
              onUpdateShelf={(book, shelf) => {
                this.updateShelf(book, shelf)
                history.push('/')
              }}
            />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <BookList
              bookCategory={this.state.category}
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
