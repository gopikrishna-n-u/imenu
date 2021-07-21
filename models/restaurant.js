const con = require('../database/connector')

module.exports = class restaurant {

    static fetchRestaurantData() {
        const query = "SELECT r.name as restaurant, r.description, r.type, m.name as menu FROM restaurant r INNER JOIN menu m on r.menu = m.menuid";

        const [resData] = con.execute(query)
        return resData
    }
}