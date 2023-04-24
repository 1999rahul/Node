const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys =require('./keys')

passport.use(new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},(accessToken,refereshToken,profile,done)=>{
      console.log(accessToken)
      console.log(refereshToken)
      console.log(profile)
}))