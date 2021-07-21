const con = require('../database/connector')

module.exports = class menu {

    static createMenu(menuForm) {

        const query = "INSERT INTO menu(name, description, items) VALUES (?,?,?)";
        const params

        menuForm.forEach(element => {
            params = [element.name, element.description, element.items]
            con.execute(query, params)
        });

        return { 'status': true }
    }

    static deleteMenu(menuid) {

        const query = "DELETE FROM menu WHERE menuid =?";
        const params = [menuid]

        const [resData] = con.execute(query, params)

        return resData
    }

    static updateMenu(field, value, menuid) {

        const query = `UPDATE menu SET ${field} = '${value}' WHERE menuid = ${menuid}`;

        const [resData] = con.execute(query)

        return resData
    }
}