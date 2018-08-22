import local from 'passport-local';
import { User } from '../../../models';

const LocalStrategy = local.Strategy;

const localLogin = new LocalStrategy({
  usernameField: 'identifier',
},
((identifier, password, done) => {
  User.findOne({
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
