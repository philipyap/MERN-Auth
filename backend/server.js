require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000;
const passport = require('passport')

//middleware
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//passpoert middleware
app.use(passport.initialize())

//importing passport file into server
require('./config/passport')(passpor)

app.get('/', (req, res)=> {
    //res.send('Backend home route')
    res.status(200).json({message: 'Smile, you are being watch by the Backend team'})
})

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})