const modelCreateAccount = require('../../models/createAccount')

exports.addFriend = async (req, res) => {
    const user = req.body.toUserName
    console.log(req.body)
    try {
        const getModelCreateAccount = await modelCreateAccount.find({ "userName": user })
        const arrayOfFriendRequest = getModelCreateAccount[0].friendsrequest
        await modelCreateAccount.updateOne({ "userName": user }, { "friendsrequest": [...arrayOfFriendRequest, req.body] })
        console.log(arrayOfFriendRequest)
        res.send("Se envio")
    } catch (error) {
        res.send(error)
    }
}

exports.getFriends = async (req, res) => {
    const user = req.body.userName
    try {
        const getModelCreateAccount = await modelCreateAccount.find({ "userName": user })
        const arrayOfFriends = getModelCreateAccount[0].friendList
        res.send(arrayOfFriends)
    } catch (error) {
        res.status("Error al traer la lista de amigos").send(error)
    }
}