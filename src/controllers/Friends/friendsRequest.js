const rejectFriendReq = (data) => {
    res.send('')
}

const acceptFriendReq = (data) => {
    res.send('')
}

exports.acceptRejectFriendReq = (req, res) => {
    if (req && req.body && req.body != null) {
        if (req.body.action && req.body.action == true) {
            acceptFriendReq(req.body)
        }
        else if (req.body.action == false) {
            rejectFriendReq(req.body)
        }
    } else {
        res.send('An error has ocurred, it will be notificated to the Picardias TM')
    }
}