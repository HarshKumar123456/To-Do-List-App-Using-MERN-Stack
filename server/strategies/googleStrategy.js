import "dotenv/config";
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from "../models/mongooseModel.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/secrets',
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ username: profile.displayName,googleId: profile.id, password: `${profile.displayName} ko password ki kya jaroorat . Are google se secured hai` }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default passport;