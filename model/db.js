const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    email:String,
    birthday:Date,
    weight:Number,
    height:Number,
    img:String,
    status:Number,
    update:{type:Date,default:Date.now}
})

module.exports = mongoose.model('User',UserSchema)