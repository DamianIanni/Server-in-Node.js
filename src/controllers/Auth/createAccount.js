const modelCreateAccount = require('../../models/createAccount')

exports.createAccount = async (req, res) => {

    console.log(req.body)
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
        console.log("DALE DALE")
        const postModelCreateAccount = await newUser.save()
        res.json(postModelCreateAccount)
    } catch (error) {
        res.send(error)
    }
}