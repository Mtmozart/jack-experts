"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = void 0;
const config_1 = require("../config");
const redisConfig = () => {
    return {
        host: config_1.EnvConfig.REDIS_DATABASE.REDIS_HOST,
        port: config_1.EnvConfig.REDIS_DATABASE.REDIS_PORT,
    };
};
exports.redisConfig = redisConfig;
//# sourceMappingURL=redisSource.js.map