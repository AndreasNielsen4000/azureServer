/* import bodyParser from "body-parser";
import express from "express";
import routes from "./routes/routes.js";
const app = express();
const port = process.env.PORT || 3000;

// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
routes(app);
// Start the server 
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
}); */

import express from "express";
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send("Hello, Server!");
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});
