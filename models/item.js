const con = require('../database/connector')

module.exports = class item {

    static createItem(itemForm) {

        const query = "INSERT INTO items(name, description, images) VALUES (?,?,?)";
        const params

        itemForm.forEach(element => {
            params = [element.name, element.description, element.image]
            con.execute(query, params)
        });

        return { 'status': true }
    }

    static deleteItem(itemid) {

        const query = "DELETE FROM items WHERE itemid =?";
        const params = [itemid]

        const [resData] = con.execute(query, params)

        return resData
    }

    static updateItem(field, value, itemid) {

        const query = `UPDATE items SET ${field} = '${value}' WHERE itemid = ${itemid}`;

        const [resData] = con.execute(query)

        return resData
    }
}