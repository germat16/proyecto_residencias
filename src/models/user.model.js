const mongoose = require('../database/connect.mongo.js')

const userSchema = {
    username:  {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    rol: {
        type: string,
        enum: ['Admin','User'],
        required: true
    }
}

const userModel = mongoose.model('user',userSchema)
module.exports = {userModel}