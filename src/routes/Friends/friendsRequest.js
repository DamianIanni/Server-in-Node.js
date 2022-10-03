const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Friends/friendsRequest')

router.get('/',  controller.acceptRejectFriendReq)


module.exports = router