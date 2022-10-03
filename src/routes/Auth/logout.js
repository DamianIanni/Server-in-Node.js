const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Auth/logout')

router.post('/', controller.logout)



module.exports = router;