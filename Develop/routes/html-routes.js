// Dependencies
const path = require('path');
const app = require('express').Router();

// Routes
// Each of the below routes just handles the HTML page that the user gets sent to.

// '/' route loads index.html
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// '/stats' route loads stats.html
app.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
);

// '/exercise' route loads exercise.html
app.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
);

module.exports = app;
