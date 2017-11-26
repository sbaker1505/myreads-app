import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'>
              Close
            </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.props.onSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {this.props.books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  bookCategory={this.props.bookCategory}
                  bookshelf={this.props.bookCategory[3]}
                  onUpdateShelf={this.props.onUpdateShelf}
                />
              )
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
