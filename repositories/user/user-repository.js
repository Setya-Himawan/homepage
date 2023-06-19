const { connection } = require("../../databases/connection");
const { Database } = require("../../databases/database");

class UserRepository {
  constructor() {
    this.database = new Database();
  }

  async getUsers() {
    const query = "SELECT * FROM USER;";
    const users = await this.database.query(query);
    // console.log(users[0]);
    return users[0];
  }

  createUser(request) {
    const query =
      "INSERT INTO USER (username, email, password) VALUES (?, ?, ?)";
    const params = [request.username, request.email, request.password];
    return this.database.query(query, params);
  }

  async getUserCredentials(request) {
    console.log("masuk user repository");
    const query =
      "SELECT username, password FROM USERS WHERE (username) LIKE ? LIMIT 1";
    const params = [request.username];
    const user = await this.database.query(query, params);
    return user[0][0];
  }
}

module.exports = { UserRepository };
