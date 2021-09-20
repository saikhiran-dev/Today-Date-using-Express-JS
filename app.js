const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const newDate = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

module.exports = app;
