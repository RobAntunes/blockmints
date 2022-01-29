const http = require("http");
const express = require("express");
const app = express();

const router = require("./routes/router");

const PORT = process.env.PORT || 3000;

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(router)
  .listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
