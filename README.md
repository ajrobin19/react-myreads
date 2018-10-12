# MyReads Project



## TL;DR

To open app:

* install all project dependencies with `npm install`
* install the react router with `npm install react-router-dom`
* start the development server with `npm start`

## Bookshelf
The root page in the application is your book shelf. You can make books around from one shelf to another by clicking the green drop down menu on the book and selecting where you would like the book to be moved to. If none is selected, the book will be removed from your bookshelf.

To add new books to your library, click the green add button in the bottom right hand corner of the bookshelf page. That will take you to a page you the search page.

## Search
On the search page, you can search for new books by typing into the search bar. To add a new book, click the green drop down menu on the book and select which shelf you would like the book to be moved to. If none is selected, the book will not be added to your bookshelf.

Books that are already on your bookshelf will still show up in the search, but there menu option will reflect the shelf the book is currently on.

_Important_
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. The list includes: 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.