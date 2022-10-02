//import express from 'express';     //ES6 modules
const express = require("express"); //commonjs module

const server = express();
server.use(express.json()); //teaches express how to read json from req.body
const shortid = require("shortid");

server.get("/", (req, res) => {
  res.send("<h1>A mi el mencho me pela la verga</h1>");
});

let hubs = [
  {
    id: shortid.generate(),
    name: "Web 40 node intro",
    lessonId: 1,
    cohort: "web 30",
  },
  {
    id: shortid.generate(),
    name: "Web 50 node intro",
    lessonId: 2,
    cohort: "web 50",
  },
];
let lessons = [
  {
    id: shortid.generate(),
    name: "Web 40 node intro",
    lessonId: 1,
    cohort: "web 30",
  },
  {
    id: shortid.generate(),
    name: "Web 50 node intro",
    lessonId: 2,
    cohort: "web 50",
  },
];
let nextHubId = 3;

server.get("/api/hubs", (req, res) => {
  res.json(hubs);
});

server.post("/api/hubs", (req, res) => {
  const newHub = req.body; //needs express.json() middleware

  newHub.id = shortid.generate();
  hubs.push(newHub);

  res.json(newHub);
});

const PORT = 8000; // we visit http://localhost:8000/ to see the api
server.listen(PORT, () =>
  console.log(`Hello minetito hermosho, server is running ${PORT}`)
);
