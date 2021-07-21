const con = require('../database/connector')

module.exports = class auth {

    static fetchUser(username) {
        const query = "SELECT password, userid from users WHERE username = ?";
        const params = [username]
        return con.execute(query, params)
    }

    static async checkCredentials(username, email) {
        const [emailData] = await con.execute('SELECT COUNT(1) as count FROM users WHERE email =?', [email])

        const [userData] = await con.execute('SELECT COUNT(1) as count FROM users WHERE username =?', [username])

        return { emailStatus: emailData, userStatus: userData }
    }

    static async registerUser(username, password, email, phone) {
        const query = "INSERT INTO users (username, password, email, phone) VALUES (?,?,?,?)";
        const params = [username, password, email, phone]
        const [resData] = await con.execute(query, params)
        return resData
    }

    static async setLoggedStatus(userid, status) {
        const query = 'UPDATE users SET isloggedin = ? WHERE userid = ?';

        const [update_status] = await con.execute(query, [status, userid]);
        return update_status;
    }
}