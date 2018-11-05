import local from 'passport-local';
import to from 'await-to-js';
import { User } from '../../../models';

const LocalStrategy = local.Strategy;

const localLogin = new LocalStrategy({
  usernameField: 'identifier',
},
(async (identifier, password, done) => {
  const [err, user] = await to(User.findOne({
    $or: [
      { username: identifier },
      { email: identifier.toLocaleLowerCase() },
    ],
  }));
  if (err) return done(err);
  if (!user || !user.comparePassword(password)) return done(null, false);
  return done(null, user);
}));

export default localLogin;
