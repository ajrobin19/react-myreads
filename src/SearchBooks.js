import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'

class SearchBooks extends Component {

	thumbnail = (book) => {
		if(!book.hasOwnProperty('imageLinks')){
			return { width: 128, height: 192}
		}else{
			return { width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}
		}
	}

	onShelfAlready(book){
		let category = ''
		this.props.books.filter(checkBook => checkBook.id === book.id).map(checkBook => category = checkBook.shelf)
		if(category === ''){
			category = 'none'
		}
		return category
	}

	render(){
		return(
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link className='close-search' to='/' onClick={() => this.props.currentResults = ''}>Close</Link>
			    <div className="search-books-input-wrapper">
			      {/*
			        NOTES: The search from BooksAPI is limited to a particular set of search terms.
			        You can find these search terms here:
			        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

			        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			        you don't find a specific author or title. Every search is limited by search terms.
			      */}
			      <DebounceInput type="text" minLength={1} debounceTimeout={500} placeholder="Search by title or author" onChange={(e) => this.props.searchUpdate(e)}/>
			    </div>
			  </div>
			  <div className="search-books-results">
			    <ol className="books-grid">
			    	{this.props.currentResults !== undefined && Array.isArray(this.props.currentResults) && (
			    		this.props.currentResults.map((book) => 
							<li key={book.id}>
		                    	<div className="book">
		                        	<div className="book-top">
		                            	<div className="book-cover" style={this.thumbnail(book)}></div>
		                            	<div className="book-shelf-changer">
		                              		<select value={this.onShelfAlready(book)} onChange={((e) => this.props.updateLibrary(book, e))}>
		                                		<option value="move" disabled>Move to...</option>
		                               			<option value="currentlyReading">Currently Reading</option>
		                                		<option value="wantToRead">Want to Read</option>
		                                		<option value="read">Read</option>
		                                		<option value="none">None</option>
		                              		</select>
		                            	</div>
		                          	</div>
		                          	<div className="book-title">{book.title}</div>
		                          	<div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
		                        </div>
		                    </li>
		                )
			    	)}
			    </ol>

			  </div>
			</div>
		)
	}
}

export default SearchBooks