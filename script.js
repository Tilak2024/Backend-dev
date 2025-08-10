// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello, World!');
// });

// server.listen(5000);

// console.log('Server is running on http://localhost:5000');

import express from "express";

const app = express();

console.log("=== Script restarted ===");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/profile", (req, res) => {
  res.send("Hello from 5000!");
});

app.listen(5000);
