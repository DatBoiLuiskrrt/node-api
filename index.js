//import express from 'express';     //ES6 modules
const express = require("express"); //commonjs module

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>A mi el mencho me pela la verga</h1>");
});

const PORT = 8000; // we visit http://localhost:8000/ to see the api
server.listen(PORT, () =>
  console.log(`Hello minetito hermosho, server is running ${PORT}`)
);
