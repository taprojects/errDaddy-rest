const express = require('express');
const app = express();
const mongoConnection = require('./middleware/mongo-connection');
const expressGa = require('express-ga-middleware');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use(expressGa('UA-145599955-1'));
app.use('/api/v1/error', mongoConnection, require('./routes/errorRoutes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

