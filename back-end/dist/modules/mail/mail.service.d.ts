import * as nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';
import { SendEmailHandler } from './types/sendEmailHandler.types';
export declare class SendEmailService {
    private readonly sendEmailProvider;
    constructor(sendEmailProvider: nodemailer.Transporter<SentMessageInfo>);
    sendEmailCreate({ name, email }: SendEmailHandler): Promise<void>;
    resetPasswordEmail(email: string, username: string, password: string): Promise<void>;
}
