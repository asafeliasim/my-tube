## MyTubeAPP
A ReactJS application to create your own playvideo from youtube,using you-tube DATA API 

# Descripition
My-tube is a mern stack build with react, nodejs and mongodb. 
The idea of this project is to lern to work with hooks. 

New user sign-up and then the search page will show up, user can search a video in the search-bar and get 5 results from the you-tube.
The user can save videos to his playlist or goes directly to youtube page.

![](/img/mytube.png)

## Key Features
- Comfortable and simple user-interface. 
- Secure private data of the user.
- Get and Post data from mongoDB-atlas of the current user.
- Used youtube-DATA-API in order to get user search of his videos. limited to 5 videos because it is free trail.

## Tech and Librarys
- Using React in the client-side. Use hooks to keep the state and dispatch the functions. 
- NodeJS - in the backend. Using express to run the server and seprate to individuals routes. 
- MongoDB - Using mongoose to create the model Schema and to connent DB to server simply.
- Bootstrap4.
- axios - to get request from client to server. 
- react-router-dom - switch and route between the linked pages.
- express-validator - check the user input for valid values.
- jsonwebtoken - using to authentication the user.
- bcrypts - Useing to secure user passowrd - using hash-function from the library that change the password to larger string and hide the correct one.  

