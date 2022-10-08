const ModelCreateUser = require('../../models/meetingSent')


exports.createInvitation = async (req, res) => {
    try {
        const getModelOfCreateUser = await ModelCreateUser.find()
        res.json(getModelOfCreateUser)
    } catch (error) {
        res.send('Error' + error)
    }
}