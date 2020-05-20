const User = require("./model")

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const users = await User.find()
      res.send({
        message: "Get all users",
        users: users,
      })
    } catch (error) {
      res.send(error)
    }
  },

  getById: async (req, res, next) => {
    const id = Number(req.params.id)
    try {
      const user = await User.findById(id)
      if (user) {
        res.send({
          message: "Get user by id",
          user: user,
        })
      } else {
        res.send({
          message: "User is not found",
        })
      }
    } catch (error) {}
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
