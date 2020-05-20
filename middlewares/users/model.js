const fs = require("fs-extra")
// const users = require("./users.json")

let idCounter = 2

module.exports = {
  find: async () => {
    const items = await fs.readJson(__dirname + "/users.json")
    return items
  },

  findById: async (id) => {
    const items = await fs.readJson(__dirname + "/users.json")
    const item = items.find((item) => item.id === id)
    console.log(item)

    return item
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
