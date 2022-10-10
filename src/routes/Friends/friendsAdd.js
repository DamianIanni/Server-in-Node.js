const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Friends/friendsAdd')

router.post('/',  controller.addFriend) // To add a new friend

router.get('/', controller.getFriends) // To get friends and show list


module.exports = router



