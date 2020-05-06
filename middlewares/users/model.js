const users = require("./users.json")

let idCounter = 2
let items = users

module.exports = {
  find: () => {
    return items
  },

  findById: (id) => {
    return items.find((item) => item.id === id)
  },
}
