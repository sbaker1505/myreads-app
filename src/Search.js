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
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <Book
            books={this.props.books}
          />
        </div>
      </div>
    )
  }
}

export default Search
