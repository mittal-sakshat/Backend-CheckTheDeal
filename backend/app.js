const express = require('express')
const errorMiddleware = require("./middlerware/error")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);


//middleware for errors

app.use(errorMiddleware)

module.exports = app