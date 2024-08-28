import * as nodemailer from 'nodemailer';
export declare const SendEmailProvider: {
    provide: string;
    useValue: nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
};
