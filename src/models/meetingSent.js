const { Schema, model } = require('mongoose')

const meetingSent = new Schema({
    toUserName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    locate: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    meetingStatus: null
})

module.exports = model('meetingSent', meetingSent)