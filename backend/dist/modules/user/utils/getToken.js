"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = getToken;
const common_1 = require("@nestjs/common");
function getToken(req) {
    if (!req) {
        throw new common_1.ForbiddenException('Acesso negado.');
    }
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        throw new common_1.ForbiddenException('Acesso negado.');
    }
    return token;
}
//# sourceMappingURL=getToken.js.map