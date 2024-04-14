const bodyParser = require('body-parser');
const express = require('express')
const RadioBrowser = require('radio-browser');
const app = express();
const port = process.env.PORT || 3000;

// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// GET method route
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'
    });
});

//Get users
app.get('/users', (request, response) => {
    response.send(users);
});

// Start the server 
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});



const users = [
    {
      id: 1,
      name: "Richard Hendricks",
      email: "richard@piedpiper.com",
    },
    {
      id: 2,
      name: "Bertram Gilfoyle",
      email: "gilfoyle@piedpiper.com",
    },
];

// Get radio stations by name
app.get('/radio', async (request, response) => {
    //const { name } = request.query;
    let filter = {
        by: 'name', // stations by tag,
        searchterm: 'kim',
        limit: 25
    }
    const stations = await RadioBrowser.getStations(filter);
    response.send(stations);
});

// Get top 5 radio stations by click count
app.get('/radio/top', async (request, response) => {
    let filter = {
        by: 'topclick', // stations by topvote
        limit: 5    // top 5 stations
    }
    const stations = await RadioBrowser.getStations(filter);
    response.send(stations);
});

