require('dotenv').config()


// a passport strategy for authenicating with a json web token
// this allws to authenicate endpoints using the toke.
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const passport = require('passport')
const { deserializeUser } = require('passport')
//const User = mongoose.model('User')

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = process.env.JWT_SECRET

module.exports = (passport)=>{
    passport.use(new JwtStrategy(option,(jwt_payload, done)=>{
        deserializeUser.findById(jwt_payload.id)
        .then(user =>{
            if(user){
                //If the user is found, return null(for error)and user
                return done(null, user)
            }
            //if no user is found
            return done(null, false)
        })
        .catch(err=>{
            console.log('error',err)
        })
    }))
}
