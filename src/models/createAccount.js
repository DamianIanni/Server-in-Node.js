const { Schema, model } = require('mongoose')

const userCreate =  new Schema({
    userName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friendList: [],
    meetingRecived: [],
    meetingSent: []
})


module.exports = model('userCreate', userCreate)