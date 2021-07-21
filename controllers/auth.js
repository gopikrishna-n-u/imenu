const con = require('../database/connector');
const bcrypt = require('bcrypt');
const auth = require('../models/auth')

module.exports.verifyUser = async (req, res, next) => {
    try {
        const storedPassword = await auth.fetchUser(req.body.username);
        const pepper = '!';
        const passMatch = await bcrypt.compare((req.body.password + pepper), storedPassword[0].password);

        const logStatus = await auth.setLoggedStatus(storedPassword[0].userid, 1)

        res.status(200).send({ status: passMatch, result: { userid: storedPassword[0].userid } });

    } catch (error) {
        res.status(200).send({ status: false, result: 'User not found!' });
        console.log(error)
    }
}

module.exports.registerUser = async (req, res, next) => {

    try {

        const checkStatus = await auth.checkCredentials(req.body.username, req.body.email);

        if (checkStatus.userStatus[0].count > 0) {
            res.status(200).send({ status: false, result: "username exists" });
        }

        else if (checkStatus.emailStatus[0].count > 0) {
            res.status(200).send({ status: false, result: "email exists" });
        }

        else {
            const pepper = '!';
            const salt = '!';
            let token = req.body.username + req.body.phone;
            token = await bcrypt.hash((token + salt), 10)

            const hashedPassword = await bcrypt.hash((req.body.password + pepper), 10)

            const regStatus = await auth.registerUser(req.body.username, hashedPassword, req.body.email, req.body.phone);

            res.status(200).send({ status: true, result: "Registration Success" });
        }

    } catch (e) {
        res.status(200).send({ status: false, result: "Request Failed" });
        console.log(e)
    }
}

module.exports.logOutUser = async (req, res, next) => {
    try {
        const logStatus = await auth.setLoggedStatus(req.body.userid , 0);
        res.status(200).json({ "status": true, "result": "Logged out." })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}