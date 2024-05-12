const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors library

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3000;

// Configure CORS to allow requests from any origin
const corsOptions = {
  origin: "*"
};

// Apply CORS middleware with options
server.use(cors(corsOptions));

// Apply other middlewares
server.use(middlewares);
server.use(router);

server.listen(port);