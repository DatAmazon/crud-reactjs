const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require("./models/Users")

const app = express();//constructor
app.use(cors)
app.use(express.json())//phân tích data request đến server, cho phép truy cập data gửi đến qua req.body
// app.use("/123")


mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.post("/createUser", (req, res) => {
    console.log(req.body)
    UserModel.create(req.body)//tạo bản ghi dựa trên data đc gửi lên từ req.body
    .then(user =>res.json(user))
    .catch(er => res.json(er))
})

app.listen(3001, () => {
    console.log("server is running vvvvvvv....")
})