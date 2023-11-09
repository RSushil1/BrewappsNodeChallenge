# BrewappsNodeChallenge : Bookstore REST API
This is a RESTful API for managing a bookstore, allowing users to perform CRUD operations on books. It uses MongoDB as the database to store book data.

Deployed Site: https://brewapps-node-challenge.vercel.app/

API Endpoints
The API provides the following endpoints for CRUD operations:

1. Add a new book

Endpoint: /api/books/create-book
Method: POST
Request Body:
json
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary"
}
Response: Success and Returns the created book's information.

2. View a list of all books

Endpoint: /api/books/get-book
Method: GET
Response: Returns a list of all books in the database.

3.View details of a specific book by its ID

Endpoint: /api/books/get-book/:id
Method: GET
Response: Returns the details of the book with the specified ID if it exists.


4.Update a book's details

Endpoint: /api/books/update-book/:id
Method: PUT
Request Body: Provide the fields you want to update (title, author, summary).
Response: Returns the updated book's information.


5.Delete a book by its ID

Endpoint: /api/books/delete-book/:id
Method: DELETE
Response: Returns a success message if the book was deleted.


# Setting Up and Running the Application Locally
To run this application locally, follow these steps:

1. Clone the repository: in git-bash

git clone https://github.com/RSushil1/BrewappsNodeChallenge.git
cd BrewappsNodeChalleng

2. Install the required dependencies: git-bash
npm install

3. Set up a MongoDB database either locally or using a cloud solution like MongoDB Atlas.
4. Create a .env file in the project root directory and provide your MongoDB connection string. You can use .env.example as a template.

5. Start the server:
npm start
The API will be available at http://localhost:8000/.

# Video Demonstration
A video demonstration of all CRUD operations, including edge cases, can be found here.
