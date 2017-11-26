import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookList extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            {/* Start of bookshelves */}
            {this.props.bookCategory.filter((bookshelf) => bookshelf.id !== 'none').map((bookshelf) => (
              <div key={bookshelf.id}>
                <h2 className="bookshelf-title">{bookshelf.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books
                      .filter((book) => bookshelf.id === book.shelf)
                      .map((book) => (
                        <Book
                          key={book.id}
                          book={book}
                          bookCategory={this.props.bookCategory}
                          bookshelf={bookshelf}
                          onUpdateShelf={this.props.onUpdateShelf}
                        />
                      ))}
                  </ol>
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
