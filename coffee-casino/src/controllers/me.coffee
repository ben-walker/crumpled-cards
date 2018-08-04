export getUserInfo = (req, res, next) ->
  if req.isAuthenticated()
  then res.status(200).send(user: req.user)
  else res.status(404).send(user: null)
