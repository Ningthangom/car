const express = require('express');
const app = express()
const mongoose = require('mongoose')
const PORT = 5000;
const {MONGOURI}= require('./key')

// mongo Atlas password: 9YjPOWVTkram4YDs

// did not put this in a const as schema was not exported to avoid required error
require('./models/user')


// to pass incoming request to json
app.use(express.json())
app.use(require('./routes/auth'))



mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}) 
mongoose.connection.on('connected', ()=> {
    console.log('connected to mongo')
})

mongoose.connection.on('error', (err)=> {
    console.log('error when connected mongo', err)
})



app.listen(PORT, ()=> {
    console.log("server is running on ", PORT)
})