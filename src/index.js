const express = require('express');
const app = express();
require('dotenv').config()
require('./connectionDB');
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3298);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //the server understand data coming from forms
app.use(express.json());

//Routes
app.use('/api/login', require('./routes/Auth/login')); /// Do it with Firebase
app.use('/api/logout', require('./routes/Auth/logout')); /// Do it with Firebase
app.use('/api/recoverPassword', require('./routes/Auth/recoverPassword')); /// Do it with Firebase
app.use('/api/createAccount', require('./routes/Auth/createAccount')); /// Done
app.use('/api/friendsRequest', require('./routes/Friends/friendsRequest'))
app.use('/api/friendsAdd', require('./routes/Friends/friendsAdd'))
app.use('/api/friendsDelete', require('./routes/Friends/friendsDelete'))
app.use('/api/invitation', require('./routes/Invitation/invitation'))
app.use('/api/createInvitation', require('./routes/Invitation/createInvitation'))


// Start the server
app.listen(app.set('port'), () => { console.log(`App listen to http://localhost:${app.get('port')}`) }) 