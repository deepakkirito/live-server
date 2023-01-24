const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();
const routes = require('./Routes/api-routes')

const fastify = require("fastify")({
  logger: false,
});

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://deepakkirito:Deep%40kkirito@cluster0.otcmztf.mongodb.net/test');
let db = mongoose.connection;

// Setup our static files
fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/", // optional: default '/'
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("@fastify/formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("@fastify/view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

app.use('/public', express.static(path.join(__dirname, './Public')));
app.use('/public', serveIndex(path.join(__dirname, './Public')));
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
    if(req.url == '/') {
        return res.status(200).send('Welcome to the Server')
    }
    next();
});

app.use("/", routes);

db.on('error', console.error.bind(console, 'DB Connection error!'));
db.on('open', () => {
    console.log('MongoDB is connected successfully');
    startServer();
});

// Run the server and report out to the logs
const startServer = () => {
  app.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);
}
