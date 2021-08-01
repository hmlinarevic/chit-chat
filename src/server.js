const path = require('path');

const commentsDataPath = path.resolve('./data/comments.json');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(commentsDataPath);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log(`server is running on port: ${port}`));
