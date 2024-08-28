"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = appConfig;
const common_1 = require("@nestjs/common");
function appConfig(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
}
//# sourceMappingURL=app.config.js.map