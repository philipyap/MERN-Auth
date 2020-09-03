require('dotenv').config()
const mongoose = require('mongoose')


//Mongo connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection

//set up an event listener to fire once when the connections 'open'
// console.log what host and port

db.once('open', ()=>{
    console.log(`Connected to MongoDB at ${db.host}: ${db.port}`)
})

db.on('error', (error)=>{
    console.log(`Database error\n${error}`)
})
module.exports.User = require('./User')