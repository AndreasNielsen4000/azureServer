import bodyParser from "body-parser";
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
});
