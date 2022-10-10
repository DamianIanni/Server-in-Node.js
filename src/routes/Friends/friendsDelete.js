const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Friends/friendsDelete')

router.delete('/', controller.deleteFriend)

module.exports = router