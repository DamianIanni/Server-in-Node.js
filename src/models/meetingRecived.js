const { Schema, model } = require('mongoose')

const meetingRecived = new Schema({
    fromUserName: {
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
    }
})

module.exports = model('meetingRecived', meetingRecived)