# BookToRead
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Code Examples](#code-examples)
## General info
 It is a simple backend project with list of books to read. 
 
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
## Features
The application is used to log user and add books that we want to read.

The crud is created, so we can create, read, update and delete books
(the creation code is in the tab below).

If the user has logged in correctly or the book has been correctly added in postman, the action is saved in MongoDB.
![p3](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/138924908_214251420406955_355595143930317866_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=8k1QD7ZhiFsAX9kkLm0&_nc_ht=scontent-waw1-1.xx&oh=9471dabd92075b6ce12d5e6eece29483&oe=60261F2F)

If any of the actions are not performed correctly, an error message is displayed.
![p4](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/138838136_167389201418376_915578422048062883_n.png?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=UvWiBOCd3RcAX9nntAR&_nc_ht=scontent-waw1-1.xx&oh=204866ccd6b049c41b9525a5e3dac0e9&oe=6026B3C2)
## Setup
First you need to install the node_modules directory and the nodemon.js file.

In the app.js file, you need to connect to your MongoDB.
![p1](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/139393015_416334102969150_6920083228102448808_n.png?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=H0--P25JF8wAX8oQMRU&_nc_ht=scontent-waw1-1.xx&oh=e2701e30fa00f369f7fea8813a6730fa&oe=6028CA34)

In the nodemon.js file, you need to encrypt your password to keep it safe.
![p5](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/139111319_226589679021631_6818955392980981738_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=zeXXMI4sntAAX9WjAfa&_nc_ht=scontent-waw1-1.xx&oh=008c1a635f758bdb34cc853ac201f79c&oe=60273A9A)

To start the project, enter npm start in the terminal and use Live Server.

You will need Postman to log in a user and add books to the database.
## Code Examples
Code for creating a book to read:
![p5](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/138811267_772816353583676_6022256788170167231_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=3SU-jltzSjAAX_quvdi&_nc_ht=scontent-waw1-1.xx&oh=cae4711ccc6f9e6e6a5a53b146bfef2d&oe=602865E4)

Code of user schema:
![p6](https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/139081104_867555714081823_2776269813883155856_n.png?_nc_cat=105&ccb=2&_nc_sid=ae9488&_nc_ohc=8L5mk8KWaB0AX93cAOV&_nc_ht=scontent-waw1-1.xx&oh=477f14c877b003daee1e40d3428723e9&oe=602704CA)
