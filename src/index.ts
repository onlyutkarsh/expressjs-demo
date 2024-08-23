const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

import Fastify from "fastify";

var options = {
  index: 'index.html'
};
app.use('/', express.static('/home/site/wwwroot', options)); // https://stackoverflow.com/a/54248175

app.get("/express", (req, res) => {
  res.send({
    message: "Hello from Express!",
  });
});

app.listen(port, () => {
  console.log(`Express Server is at http://localhost:${port}`);
});

// const fastify = Fastify(
//   {
//     logger: true,
//   }
// );

// fastify.get("/fastify", async (req, res) => {
//   return {
//     message: "Hello from Fastify endpoint!",
//   };
// });

// fastify.listen({ port: Number(port) }, function (err, address) {
//     if (err) {
//         fastify.log.error(err)
//         process.exit(1)
//     }
//     // Server is now listening on ${address}
//     fastify.log.info(`server listening on ${address}`);
// });
