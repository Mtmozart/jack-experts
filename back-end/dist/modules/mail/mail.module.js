"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailModule = void 0;
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const mail_provider_1 = require("./mail.provider");
const sendEmailQueueService_service_1 = require("./job/send-email-queue/sendEmailQueueService.service");
const sendEmailQueueConsumer_service_1 = require("./job/send-email-queue-consumer/sendEmailQueueConsumer.service");
const bull_1 = require("@nestjs/bull");
let SendEmailModule = class SendEmailModule {
};
exports.SendEmailModule = SendEmailModule;
exports.SendEmailModule = SendEmailModule = __decorate([
    (0, common_1.Module)({
        imports: [bull_1.BullModule.registerQueue({ name: 'SEND_EMAIL' })],
        providers: [
            sendEmailQueueService_service_1.SendEmailQueueService,
            sendEmailQueueConsumer_service_1.SendEmailQueueConsumer,
            mail_service_1.SendEmailService,
            mail_provider_1.SendEmailProvider,
        ],
        exports: [sendEmailQueueService_service_1.SendEmailQueueService],
    })
], SendEmailModule);
//# sourceMappingURL=mail.module.js.map