const bcrypt = require("bcrypt");
const { UserRepository } = require("../repositories/user/user-repository");

class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async login(request) {
        try {
            console.log('masuk auth service');
            // MENGAMBIL USER DGN USERNAME YANG DIMINTA
            const user = await this.userRepository.getUserCredentials(request);
            console.log('mengambil data user');
            // MENGECEK KESAMAAN PASSWORD
            const isPasswordCorrect = await bcrypt.compare(request.password, user.password);
            // JIKA BENAR RETURN TRUE
            if (isPasswordCorrect) {
                return true;
            }
            // SALAH MAKA FALSE
            return false;
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = { AuthService };