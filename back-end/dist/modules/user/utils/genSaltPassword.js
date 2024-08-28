"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = genSaltPassword;
const bcrypt_1 = require("bcrypt");
async function genSaltPassword(password) {
    const salt = await (0, bcrypt_1.genSalt)();
    return await (0, bcrypt_1.hash)(password, salt);
}
//# sourceMappingURL=genSaltPassword.js.map