import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {

  bookshelfInfo = [
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
      <div className="bookshelf">
        {this.bookshelfInfo.map((bookshelf) => (
          <div key={bookshelf.id}>
            <h2 className="bookshelf-title">{bookshelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book />
                <Book />
              </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Bookshelf
