// Import the Express framework  
const express = require("express");

// Create an instance of an Express application  
const server = express();

// Define the port number for the server to listen   
const PORT = 3010;  

// Define a route that handles GET requests to the root URL ("/")  
server.get("/", (req, res) => {
    console.log("Hellow there")
    console.log("merge conflict test")
    // Send a response with the text "Hello, API!" when this route is accessed  
    res.send("Hello, People!");
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:` + PORT);
});
