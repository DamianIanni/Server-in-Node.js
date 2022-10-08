const modelCreateAccount = require('../../models/createAccount')

exports.createAccount = async (req, res) => {

    const newUser = new modelCreateAccount({
        userName: req.body.userName,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        friendList: [],
        meetingRecived: [],
        meetingSent: []
    })

    try {
        const postModelCreateAccount = await newUser.save()
        res.json(postModelCreateAccount)
    } catch (error) {
        res.send(error)
    }
}