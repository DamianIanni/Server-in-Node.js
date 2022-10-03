const { Router } = require('express')
const router = Router()
const controller = require('../../controllers/Invitation/createInvitation')

router.post('/', controller.createInvitation)

module.exports = router