const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/comments', (req, res) => {
	res.sendFile(path.resolve('./data/comments.json'));
});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port);

console.log(`Server started on port: ${port}`);
