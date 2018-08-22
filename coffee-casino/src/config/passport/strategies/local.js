import local from 'passport-local';
import { user } from '../../../models';

localStrategy = local.Strategy;

const localLogin = new localStrategy({
  usernameField: 'identifier',
},
((identifier, password, done) => {
  user.findOne({
    $or: [
      { username: identifier },
      { email: identifier },
    ],
  }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (!user.comparePassword(password)) return done(null, false);
    return done(null, user);
  });
}));

export default localLogin;
