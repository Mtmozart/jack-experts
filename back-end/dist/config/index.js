"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.EnvConfig = {
    database: {
        HOST_DB: process.env.HOST_DB,
        PORT_DB: +process.env.PORT_DB,
        USER_DB: process.env.USER_DB,
        PASSWORD_DB: process.env.PASSWORD_DB,
        NAME_DB: process.env.NAME_DB,
        URL: process.env.URL_DATABASE,
    },
    ENV: process.env.NODE_ENV,
    secret: process.env.JWT_SECRET,
    EMAIL: {
        HOST_EMAIL: process.env.HOST_EMAIL,
        PORT_EMAIL: +process.env.PORT_EMAIL,
        USER_AUTH_EMAIL: process.env.USER_AUTH_EMAIL,
        EMAIL_PASS_EMAIL: process.env.PASS_EMAIL,
    },
    REDIS_DATABASE: {
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_PORT: +process.env.REDIS_PORT,
    },
};
//# sourceMappingURL=index.js.map