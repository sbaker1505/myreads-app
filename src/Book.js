import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books
          .filter((book) => this.props.bookshelf.id === book.shelf)
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
                  <select value={this.props.bookshelf.id} readOnly onChange={(event) => this.props.onUpdateShelf(book, event.target.value)}>
                    <optgroup label="Move to...">
                      {this.props.bookshelfList.map((bookshelf) => (
                        <option
                          key={bookshelf.id}
                          value={bookshelf.id}
                          >
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
    )
  }
}

export default Book
