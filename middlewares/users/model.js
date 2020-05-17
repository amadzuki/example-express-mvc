const fs = require("fs-extra")
// const users = require("./users.json")
let items = fs.readJson(__dirname + "/users.json")

let idCounter = 2

module.exports = {
  find: () => {
    return items
  },

  findById: (id) => {
    return items.find((item) => item.id === id)
  },

  newId: () => {
    idCounter++
    return idCounter
  },

  concatNewUser: (newUser) => {
    const updatedUsers = items.concat(newUser)
    return updatedUsers
  },
}
