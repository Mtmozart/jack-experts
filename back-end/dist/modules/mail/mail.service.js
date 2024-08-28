"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailService = void 0;
const common_1 = require("@nestjs/common");
const mail_provider_1 = require("./mail.provider");
const nodemailer = require("nodemailer");
let SendEmailService = class SendEmailService {
    constructor(sendEmailProvider) {
        this.sendEmailProvider = sendEmailProvider;
    }
    async sendEmailCreate({ name, email }) {
        try {
            await this.sendEmailProvider.sendMail({
                from: 'bmozart.dev@gmail.com',
                to: email,
                subject: `Bem-vindo, ${name}!`,
                text: `Olá, ${name}! Seja bem-vindo!`,
                html: `
          <h1>Bem-vindo(a) ${name}!</h1>
          <p>Obrigado por se cadastrar em nossa plataforma. Estamos felizes em tê-lo(a) conosco.</p>
          <p>Se tiver qualquer dúvida, não hesite em nos contatar.</p>
          <p>Atenciosamente,<br/>Equipe Bmozart</p>
        `,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async resetPasswordEmail(email, username, password) {
        try {
            await this.sendEmailProvider.sendMail({
                from: 'bmozart.dev@gmail.com',
                to: email,
                subject: `Redefinição de Senha para ${username}`,
                text: `Olá ${username},\n\nSua senha foi redefinida com sucesso. Sua nova senha é: ${password}\n\nAtenciosamente,\nEquipe Bmozart`,
                html: `
          <h1>Redefinição de Senha</h1>
          <p>Olá ${username},</p>
          <p>Sua senha foi redefinida com sucesso. Sua nova senha é:</p>
          <p><strong>${password}</strong></p>
          <p>Se você não solicitou essa alteração, por favor, entre em contato com nosso suporte imediatamente.</p>
          <p>Atenciosamente,<br/>Equipe Bmozart</p>
        `,
            });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SendEmailService = SendEmailService;
exports.SendEmailService = SendEmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(mail_provider_1.SendEmailProvider.provide)),
    __metadata("design:paramtypes", [Object])
], SendEmailService);
//# sourceMappingURL=mail.service.js.map