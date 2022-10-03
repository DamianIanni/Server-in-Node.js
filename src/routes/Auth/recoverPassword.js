const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Auth/recoverPasswword')

router.post('/', controller.recoverPassword)


module.exports = router;