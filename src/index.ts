const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

import Fastify from "fastify";

app.get("/express", (req, res) => {
  res.send({
    message: "Hello from Express!",
  });
});

app.listen(port, () => {
  console.log(`Express Server is at http://localhost:${port}`);
});
