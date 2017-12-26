import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
  render() {
    return (
      <div className="search-books">
        {console.log(this.props.currentBooks)}
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
              {this.props.books.map
                ? this.props.books.map((book) => {
                    const currentBook = this.props.currentBooks.filter(currentbook => currentbook.id === book.id)
                    return <Book
                      key={book.id}
                      book={book}
                      bookCategory={this.props.bookCategory}
                      bookshelf={currentBook.length > 0 ? currentBook[0].shelf : null}
                      onUpdateShelf={this.props.onUpdateShelf}
                    />
                  })
                : <p>No books found</p>}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
