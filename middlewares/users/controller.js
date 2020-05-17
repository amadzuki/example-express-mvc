const User = require("./model")

module.exports = {
  getAll: (req, res, next) => {
    res.send({
      message: "Get all users",
      users: User.find(),
    })
  },

  getById: (req, res, next) => {
    const id = Number(req.params.id)
    const user = User.findById(id)
    if (user) {
      res.send({
        message: "Get user by id",
        user: User.findById(id),
      })
    } else {
      res.send({
        message: "User is not found",
      })
    }
  },

  postNewUser: (req, res, next) => {
    const newUser = {
      id: User.newId(),
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
    }
    const updatedUsers = User.concatNewUser(newUser)
    res.send({
      message: "Add new user",
      newUser: newUser,
    })
  },
}
