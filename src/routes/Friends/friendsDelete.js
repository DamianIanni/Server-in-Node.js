const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Friends/friendsDelete')

router.post('/', controller.deleteFriend)

module.exports = router