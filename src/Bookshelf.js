import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Bookshelf extends Component {
	constructor (props) {
    	super(props)
    	this.shelves = [
			{id:'currentlyReading', text: 'Currently Reading'},
			{id:'wantToRead', text:'Want to Read'},
			{id:'read', text: 'Read'}
		]
		
  	}
	componentDidUpdate(prevProps){
		if(prevProps === this.props){
			console.log('Updated')
		}

	}

	thumbnail = (book) => {
		if(!book.hasOwnProperty('imageLinks')){
			return { width: 128, height: 192}
		}else{
			return { width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}
		}
	}

	render(){
		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	              	{this.shelves.map((category) =>
						<div className="bookshelf" key={category.id}>
			                <h2 className="bookshelf-title">{category.text}</h2>
			                <div className="bookshelf-books">
			                    <ol className="books-grid">
			                      	{this.props.books !== undefined && Array.isArray(this.props.books) && (
							    		this.props.books.filter((book) => book.shelf === category.id).map((book) => 
								    		<li key={book.id}>
						                    	<div className="book">
						                        	<div className="book-top">
						                            	<div className="book-cover" style={this.thumbnail(book)}></div>
						                            	<div className="book-shelf-changer">
						                              		<select value={category.id} onChange={((e) => this.props.updateLibrary(book, e))}>
						                                		<option value="move" disabled>Move to...</option>
						                               			<option value="currentlyReading">Currently Reading</option>
						                                		<option value="wantToRead">Want to Read</option>
						                                		<option value="read">Read</option>
						                                		<option value="none">None</option>
						                              		</select>
						                            	</div>
						                          	</div>
						                          	<div className="book-title">{book.title}</div>
		                          					<div className="book-authors">{book.authors}</div>
						                        </div>
						                    </li>
						                )
							    	)}
			                    </ol>
			                </div>
		                </div>
					)}
	              </div>
	            </div>
	            <div className="open-search">
	              <Link to='/search'>Add a book</Link>
	            </div>
          	</div>
		)
	}
}

export default Bookshelf