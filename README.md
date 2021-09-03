# BookToRead
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Code Examples](#code-examples)
## General info
 It is a simple backend project with list of books to read and log in. 
 
 Part of the code is written in polish language.
 
 The application requires connection to the MongoDB database, but it is safe because the password is encoded in the nodemon.js file.
## Technologies
* Node.js v12.19.0
* MongoDB
* Postman
* API 
* Express
* Multer
* Router
* BodyParser
* Morgan
## Features
The application is used to log user( with email and password) and add books that we want to read( with title, author and image).

The crud is created in api/controllers/books.js , so we can create, read, update and delete books.

If the user has logged in correctly or the book has been correctly added in postman, the action is saved in MongoDB.

If any of the actions are not performed correctly, an error message is displayed.
## Setup
First you need to install the node_modules directory and the nodemon.js file.

In the app.js file, you need to connect to your MongoDB.

In the nodemon.js file, you need to encrypt your password to keep it safe.

To start the project, enter npm start in the terminal and use Live Server.

You will need Postman to log in a user and add books to the database.
