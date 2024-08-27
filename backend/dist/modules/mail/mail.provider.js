"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailProvider = void 0;
const nodemailer = require("nodemailer");
const config_1 = require("../../config");
const transporter = nodemailer.createTransport({
    host: config_1.EnvConfig.EMAIL.HOST_EMAIL,
    port: config_1.EnvConfig.EMAIL.PORT_EMAIL,
    secure: false,
    auth: {
        user: config_1.EnvConfig.EMAIL.USER_AUTH_EMAIL,
        pass: config_1.EnvConfig.EMAIL.EMAIL_PASS_EMAIL,
    },
});
exports.SendEmailProvider = {
    provide: 'SEND_EMAIL_PROVIDER',
    useValue: transporter,
};
//# sourceMappingURL=mail.provider.js.map