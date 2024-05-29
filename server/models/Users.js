const mongoose = require("mongoose")
const UserShema = new mongoose.Schema({//định dạng data cho bảng users
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("users", UserShema)
module.exports = UserModel;