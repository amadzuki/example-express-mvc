var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var rootMiddleWare = require("./middlewares/index")
var usersMiddleWare = require("./middlewares/users")

var app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", rootMiddleWare)
app.use("/users", usersMiddleWare)

module.exports = app
