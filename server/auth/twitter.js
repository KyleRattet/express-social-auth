//twitter passport auth strategy

//register app on twitter, create a model for mongoose, setup config file (contains environment variables)

// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ twitterId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));
