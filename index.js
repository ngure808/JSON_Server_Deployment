const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors library

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 3000;

// Specify the allowed origin (e.g., your Netlify frontend URL)
const allowedOrigins = ['https://flavour-haven.netlify.app/'];

// Configure CORS with allowed origins
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Apply CORS middleware with options
server.use(cors(corsOptions));

// Apply other middlewares
server.use(middlewares);
server.use(router);

server.listen(port);