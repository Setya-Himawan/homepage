const { connection } = require("../../databases/connection");

class UserRepository {

    constructor() {
        this.connection = connection;
    }

    getUsers() {
        const query = "SELECT * FROM USERS;";
        this.connection.query(query, (err, results) => {
            if (err) {
                console.error(err);
                return err;
            }
            return results;
        });
    }

    createUser(request) {
        const query = "INSERT INTO USERS (username, email, password) VALUES (?, ?, ?)";
        this.connection.query(query, [request.username, request.email, request.password], (err, results) => {
            if (err) {
                console.error(err);
                return err;
            }
            return results;
        });
    }
}

module.exports = { UserRepository };