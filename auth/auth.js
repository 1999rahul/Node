const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local').Strategy

const users=[]

passport.use(
    'signup',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, next) => {
        try {
          users.push({email,password})
          /**
           * Save the user in DB
           */
          return next(null, {email,password});
        } catch (error) {
          next(error);
        }
      }
    )
  );
  passport.use(
    'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, next) => {
        try {
        //   const user = await UserModel.findOne({ email });
  
        //   if (!user) {
        //     return done(null, false, { message: 'User not found' });
        //   }
  
        //   const validate = await user.isValidPassword(password);
  
        //   if (!validate) {
        //     return done(null, false, { message: 'Wrong Password' });
        //   }
        /**
         * Write the authentication logic here
         */
  
          return next(null, {email,password}, { message: 'Logged in Successfully' });
        } catch (error) {
          return next(error);
        }
      }
    )
  );

  passport.use(
    new JWTstrategy(
      {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
      },
      async (token, next) => {
        try {
          return next(null, token.user);
        } catch (error) {
          next(error);
        }
      }
    )
  );