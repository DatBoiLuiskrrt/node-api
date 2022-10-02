//import express from 'express';     //ES6 modules
const express = require("express"); //commonjs module

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>A mi el mencho me pela la verga</h1>");
});

server.get("/api/hubs", (req, res) => {
  let lessons = [
    {
      id: 1,
      name: "Web 40 node intro",
      lessonId: 1,
      cohort: "web 30",
    },
    {
      id: 2,
      name: "Web 50 node intro",
      lessonId: 2,
      cohort: "web 50",
    },
  ];
  res.json(lessons);
});

const PORT = 8000; // we visit http://localhost:8000/ to see the api
server.listen(PORT, () =>
  console.log(`Hello minetito hermosho, server is running ${PORT}`)
);
