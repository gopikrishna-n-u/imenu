const menu = require('../models/menu')

module.exports.createMenu = async (req, res, next) => {
    try {
        const resData = await menu.createMenu(req.body.menuForm);
        res.status(200).json({ "status": true, "result": resData })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}

module.exports.deleteMenu = async (req, res, next) => {
    try {
        const resData = await menu.deleteMenu(req.body.menuid);
        res.status(200).json({ "status": true, "result": "Success" })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}

module.exports.updateMenu = async (req, res, next) => {
    try {
        const resData = await menu.updateMenu(req.body.field, req.body.value, req.body.menuid);
        res.status(200).json({ "status": true, "result": "Success" })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}