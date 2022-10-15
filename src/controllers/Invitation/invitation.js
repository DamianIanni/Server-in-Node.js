const createAccountModel = require('../../models/createAccount')

exports.getInvitations = async (req, res) => {
    const user = req.body.userName
    try {
        const getCreateAccountModel = await createAccountModel.find({ "userName": user })
        const invitationsRecived = getCreateAccountModel[0].meetingRecived
        console.log(invitationsRecived)
        res.json(invitationsRecived)
    } catch (error) {
        res.send(error)
    }
}

const acceptInvitation = async (req) => {
    const invitation = req
    const user = req.toUserName
    try {
        const getCreateAccountModel = await createAccountModel.find({ "userName": user })
        const existinginvitations = getCreateAccountModel[0].meetingRecived
        const finalInvitations = existinginvitations.map(item => {
            if (item.id === invitation.id) {

                item.meetingStatus = true

                
            }
            return item
        })
        await createAccountModel.updateOne({ "userName": user }, { "meetingRecived": finalInvitations })
        console.log("Y NOSE",finalInvitations)
        return finalInvitations
    } catch (error) {
        return error
    }
}
const rejectInvitation = async (req) => {
    const invitation = req
    const user = req.toUserName
    try {
        const getCreateAccountModel = await createAccountModel.find({ "userName": user })
        const existinginvitations = getCreateAccountModel[0].meetingRecived
        const finalInvitations = existinginvitations.filter(item => {
            if (item.date !== invitation.date || item.hour !== invitation.hour || item.locate !== invitation.locate) {
                return item
            }
        })
        await createAccountModel.updateOne({ "userName": user }, { "meetingRecived": finalInvitations })
        return finalInvitations
    } catch (error) {
        return error
    }
}

exports.acceptRejectInvitation = async (req, res) => {
    try {
        if (req && req.body && req.body != null) {
            if (req.body.action && req.body.action === true) {
                console.log("ACCEPTED")
                const response = await acceptInvitation(req.body)
                res.send(response)
            }
            else if (req.body.action === false) {
                console.log("REJECTED")
                const response = await rejectInvitation(req.body)
                res.send(response)
            }
        } else {
            res.send('An error has ocurred, it will be notificated to the Picardias TM')
        }
    } catch (error) {
        res.send(error)
    }
}