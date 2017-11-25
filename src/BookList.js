import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookList extends React.Component {
  bookshelf = [
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
    }
  ]

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            {/* Start of bookshelves */}
            {this.bookshelf.map((bookshelf) => (
              <div key={bookshelf.id}>
                <h2 className="bookshelf-title">{bookshelf.title}</h2>
                <div className="bookshelf-books">
                  <Book
                    bookshelfList={this.bookshelf}
                    bookshelf={bookshelf}
                    books={this.props.books}
                    onUpdateShelf={this.props.onUpdateShelf}
                  />
                </div>
              </div>
            ))}
          </div>
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
