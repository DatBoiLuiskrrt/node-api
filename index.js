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
  res.status(200).res.json(hubs);
});

server.post("/api/hubs", (req, res) => {
  const newHub = req.body; //needs express.json() middleware

  newHub.id = shortid.generate();
  hubs.push(newHub);

  res.status(200).res.json(newHub);
});

server.delete("/api/hubs/:id", (req, res) => {
  const id = req.params.id;
  const deleted = hubs.find((h) => h.id === id);

  hubs = hubs.filter((x) => x.id != id);

  res.status(200).res.json(deleted);
});

server.put("/api/hubs/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  let found = hubs.find((h) => h.id === id);

  if (found) {
    //if not -1 found
    Object.assign(found, changes);
  } else {
    //did not find a hub with that id
    //404
    res.status(404).json({
      message: "Hub not found",
    });
  }

  res.json(found);
});

const PORT = 8000; // we visit http://localhost:8000/ to see the api
server.listen(PORT, () =>
  console.log(`Hello minetito hermosho, server is running ${PORT}`)
);
