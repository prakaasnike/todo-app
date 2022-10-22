// Express Connection  and Initialization

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

//handle api body request
app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`Dolphine Listening on ${PORT}`));
//End Express Connection and Initialization

//Routes
const routes = require('./routes/ToDoRoute')
app.use(routes)
//End Routes


//Mongoose Connection and Initializaion
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDb`))
    .catch(err => console.error(err))

//After mongodb Connect pass routes


