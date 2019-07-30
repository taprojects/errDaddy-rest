const express = require('express');
const app = express();
const mongoConnection = require('./middleware/mongo-connection');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1/error', mongoConnection, require('./routes/errorRoutes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

