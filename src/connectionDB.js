const mongoose = require('mongoose')

const MEETINGAPP_MONGODB_HOST = process.env.MEETINGAPP_MONGODB_HOST;
const MEETINGAPP_MONGODB_DATABASE_NAME = process.env.MEETINGAPP_MONGODB_DATABASE_NAME

mongoose.connect(`mongodb://${MEETINGAPP_MONGODB_HOST}/${MEETINGAPP_MONGODB_DATABASE_NAME}`, {
keepAlive: true,
useNewUrlParser: true,
useUnifiedTopology: true
}).then(db => console.log('DATABASE CONNECTED',
// db.connections[0]
))
.catch(error => console.log('DATABSE ERROR',error))

