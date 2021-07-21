const item = require('../models/item')

module.exports.createItem = async (req, res, next) => {
    try {
        const resData = await item.createItem(req.body.itemForm);
        res.status(200).json({ "status": true, "result": resData })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}

module.exports.deleteItem = async (req, res, next) => {
    try {
        const resData = await item.deleteItem(req.body.itemid);
        res.status(200).json({ "status": true, "result": "Success" })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}

module.exports.updateItem = async (req, res, next) => {
    try {
        const resData = await item.updateItem(req.body.field, req.body.value, req.body.itemid);
        res.status(200).json({ "status": true, "result": "Success" })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}