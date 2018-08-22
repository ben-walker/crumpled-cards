export const getUserInfo = (req, res, next) => {
  req.isAuthenticated()
    ? res.status(200).send({ user: req.user })
    : res.status(404).send({ user: null });
};
