const bcrypt = require("bcrypt");
const { UserRepository } = require('../repositories/user/user-repository')

class UserService {
    constructor() {
        // MENGGUNAKAN USER REPOSITORY
        this.userRepository = new UserRepository();
    }

    async register(request) {
        const { username, email, password } = request;

        const hashedPassword = await bcrypt.hash(password, 10);
        const data = {
            username: username,
            password: hashedPassword,
            email: email,
        }

        try {
            // MENDAFTARKAN USER
            this.userRepository.createUser(data)
            console.log("Berhasil Daftar");
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = { UserService };