const { connection } = require("../../databases/connection");
const { Database } = require('../../databases/database');

class UserRepository {

    constructor() {
        this.database = new Database();
    }

    getUsers() {
        const query = "SELECT * FROM USERS;";
        return this.database.query(query);
    }

    createUser(request) {
        const query = "INSERT INTO USERS (username, email, password) VALUES (?, ?, ?)";
        const params = [request.username, request.email, request.password];
        return this.database.query(query, params);
    }

    async getUserCredentials(request) {
        console.log('masuk user repository');
        const query = "SELECT username, password FROM USERS WHERE (username) LIKE ? LIMIT 1";
        const params = [request.username];
        const user = await this.database.query(query, params);
        return user[0][0];
    }
}

module.exports = { UserRepository };