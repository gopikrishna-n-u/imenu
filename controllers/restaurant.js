const restaurant = require('../models/restaurant')

module.exports.fetchRestaurantData = async (req, res, next) => {
    try {
        const resData = await restaurant.fetchRestaurantData();
        res.status(200).json({ "status": true, "result": resData })
    } catch (error) {
        res.status(200).json({ "status": false, "result": "Request invalid!" })
        console.log(error)
    }
}