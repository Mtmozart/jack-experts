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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailQueueConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const mail_service_1 = require("../../mail.service");
let SendEmailQueueConsumer = class SendEmailQueueConsumer {
    constructor(sendEmailService) {
        this.sendEmailService = sendEmailService;
    }
    async execute(job) {
        const { sendEmailQueue } = job.data;
        const { name, email } = sendEmailQueue;
        if (!name || !email) {
            console.error('Name or email is undefined');
            return;
        }
        await this.sendEmailService.sendEmailCreate({ name, email });
    }
    onActive(job) {
        console.log(`Ativo`, job.id);
    }
    async onQueueFailed(job, err) {
        console.log(`Falha`, job.id, err);
    }
    async onQueueCompleted(job) {
        console.log(`Completo`, job.id);
    }
};
exports.SendEmailQueueConsumer = SendEmailQueueConsumer;
__decorate([
    (0, bull_1.Process)('SEND_EMAIL'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SendEmailQueueConsumer.prototype, "execute", null);
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SendEmailQueueConsumer.prototype, "onActive", null);
__decorate([
    (0, bull_1.OnQueueFailed)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Error]),
    __metadata("design:returntype", Promise)
], SendEmailQueueConsumer.prototype, "onQueueFailed", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SendEmailQueueConsumer.prototype, "onQueueCompleted", null);
exports.SendEmailQueueConsumer = SendEmailQueueConsumer = __decorate([
    (0, bull_1.Processor)('SEND_EMAIL'),
    __metadata("design:paramtypes", [mail_service_1.SendEmailService])
], SendEmailQueueConsumer);
//# sourceMappingURL=sendEmailQueueConsumer.service.js.map