const { Router } = require('express');
const router = Router()
const controller = require('../../controllers/Invitation/invitation')

router.post('/', controller.acceptRejectInvitation) // To Accept or Reject invitations
router.get('/', controller.getInvitations) // To get invitations list & created invitations list

module.exports = router