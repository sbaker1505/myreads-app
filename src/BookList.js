import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf />
        </div>
        <div className="open-search">
          <Link
            to='/search'
            className='add-book'>
              Add a book
            </Link>
        </div>
      </div>
    )
  }
}

export default BookList
