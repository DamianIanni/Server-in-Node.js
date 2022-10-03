const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Auth/createAccount')


router.post('/', controller.createAccount)



module.exports = router;