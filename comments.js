// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Create comments array
let comments = [
  {
    username: "alice",
    comment: "I love this!"
  },
  {
    username: "bob",
    comment: "This is terrible!"
  }
];

// Serve comments array as JSON
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});