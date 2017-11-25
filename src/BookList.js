import React from 'react'
import { Link } from 'react-router-dom'

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
                  <ol className="books-grid">
                    {/* Start of books */}
                    {this.props.books
                      .filter((book) => bookshelf.id === book.shelf)
                      .map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover"
                              style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                              }}></div>
                            {/* Bookshelf changer dropdown menu */}
                            <div className="book-shelf-changer">
                              <select value={bookshelf.id} readOnly>
                                <optgroup label="Move to...">
                                  {this.bookshelf.map((bookshelf) => (
                                    <option
                                      key={bookshelf.id}
                                      value={bookshelf.id}>
                                      {bookshelf.title}
                                    </option>
                                  ))}
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">
                            {book.authors.map((author) => (
                              <p key={author.toString().replace(/[.,\s]/g,'')}>{author}</p>
                            ))}
                          </div>
                        </div>
                      </li>
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
