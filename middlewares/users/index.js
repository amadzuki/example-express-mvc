const express = require("express")
const router = express.Router()

const users = require("./controller")

router.get("/:id", users.getById)
router.get("/", users.getAll)

router.post("/", users.postNewUser)

module.exports = router
