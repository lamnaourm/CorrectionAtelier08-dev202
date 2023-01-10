require('dotenv').config();

const express = require('express')
const cors = require('cors')
const appRoutes = require('./routes/app')
const connect = require('./config/database')

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

connect();

app.use('/', appRoutes);

app.listen(port, () => {
    console.log('Server started ...')
})