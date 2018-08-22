import localLogin from './strategies/local';
import { user } from '../../models';

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    user.findById(id, '-password', (err, user) => {
      done(err, user);
    });
  });

  passport.use(localLogin);
};
