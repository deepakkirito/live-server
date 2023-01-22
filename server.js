const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();
const routes = require('./Routes/api-routes')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://deepakkirito:Deep%40kkirito@cluster0.otcmztf.mongodb.net/test');
let db = mongoose.connection;

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

const startServer = () => {
    app.listen(7000, () => {
        console.log(`Server is running at: http://localhost:7000`);
    })
};
