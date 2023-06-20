const bcrypt = require("bcrypt");
const { v4: uuid } = require('uuid');

const { UserRepository } = require("../repositories/user/user-repository");

class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async authenticateUser(req, res) {
        const { username, password } = req.body;

        // MENCARI USER
        const user = await this.userRepository.getUserCredentials(username);
        if (!user) {
            return new Error('User not found');
        }

        // MENGECEK PASSWORD
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return new Error('Username atau Password Salah!');
        }

        // BUAT & SIMPAN TOKEN
        const token = uuid();
        res.cookie('authToken', token, { maxAge: 86400000, httpOnly: true });

        return 'Login Berhasil';
    }

}

module.exports = { AuthService };