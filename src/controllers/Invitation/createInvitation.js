const modelCreateInvitation = require('../../models/meetingSent')
const modelCreateAccount = require('../../models/createAccount')


exports.createInvitation = async (req, res) => {
    console.log(req.body)
    const user = req.body.toUserName
    try {
        ///// Still have to add the meeting to the sender
        const originalInvitations = await modelCreateAccount.find({ "userName": user })
        const arrayOfInvitations = originalInvitations[0].meetingRecived
        await modelCreateAccount.updateOne({ "userName": user }, { "meetingRecived": [...arrayOfInvitations, req.body] })
        const final = await modelCreateAccount.find({ "userName": user })
        res.json(final)
    } catch (error) {
        res.send('Error' + error)
    }
}