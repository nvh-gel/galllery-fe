// Install express server
// noinspection JSUnusedLocalSymbols

const express = require('express');
const path = require('path');


const app = express();


// Serve only static filles from dist directory
app.use(express.static('./dist/gallery-fe/'))


app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/gallery-fe/'}),
);


// start the app by listening on default heroku port
app.listen(process.env.PORT || 8080);
