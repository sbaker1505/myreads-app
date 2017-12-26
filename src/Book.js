import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : null})`
              }}>
            </div>
            {/* Bookshelf changer dropdown menu */}
            <div className="book-shelf-changer">
              <select
                value={this.props.bookshelf ? this.props.bookshelf : 'none'}
                readOnly
                onChange={(event) => this.props.onUpdateShelf(this.props.book, event.target.value)}>
                <optgroup label="Move to...">
                  {this.props.bookCategory.map((bookshelf) => (
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
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors
              ? this.props.book.authors.map((author) => (
                  <div key={author.toString().replace(/[.,\s]/g,'')}>{author}</div>
                ))
              : null
          }
          </div>
        </div>
      </li>
    )
  }
}

export default Book
