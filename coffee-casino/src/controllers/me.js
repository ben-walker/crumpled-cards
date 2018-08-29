export const getUserInfo = (req, res) => {
  if (req.isAuthenticated()) res.status(200).send({ user: req.user });
  else res.status(404).send({ user: null });
};

export const uploadProfilePic = () => {

};
