const acceptInvitation = (req, res) => {
    res.send('Modified Data')
}
const rejectInvitation = (req, res) => {
    res.send('Modified Data')
}

exports.getInvitations = (req, res) => {
    res.send('Invitations')
}

// exports.createInvitation = (req, res) => {
//     res.send('Modified Data')
// }

exports.acceptRejectInvitation = (req, res) => {
    if (req && req.body && req.body != null) {
        if (req.body.action && req.body.action == 'accepted') {
            acceptInvitation(req.body)
        }
        else if (req.body.action && req.body.action == 'rejected') {
            rejectInvitation(req.body)
        }
    } else {
        res.send('An error has ocurred, it will be notificated to the Picardias TM')
    }
}