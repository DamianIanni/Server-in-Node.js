const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Friends/friendsRequest')

router.post('/',  controller.acceptRejectFriendReq)


module.exports = router