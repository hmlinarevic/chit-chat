const path = require('path');
const express = require('express');

const commentsDataPath = path.join(__dirname, '../data/comments.json');
const clientBuildPath = path.join(__dirname, '../client/build');
const clientBuildIndexHTML = path.join(__dirname, '/client/build/index.html');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(clientBuildPath));

app.get('/comments', (req, res) => res.sendFile(commentsDataPath));

app.get('/*', (req, res) => res.sendFile(clientBuildIndexHTML));

app.listen(port);

console.log(`Server started on port: ${port}`);
