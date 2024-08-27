import { Job } from 'bull';
import { SendEmailConsumer } from '../../types/sendEmailConsumer.types';
import { SendEmailService } from '../../mail.service';
export declare class SendEmailQueueConsumer {
    private readonly sendEmailService;
    constructor(sendEmailService: SendEmailService);
    execute(job: Job<{
        sendEmailQueue: SendEmailConsumer;
    }>): Promise<void>;
    onActive(job: Job<SendEmailConsumer>): void;
    onQueueFailed(job: Job<SendEmailConsumer>, err: Error): Promise<void>;
    onQueueCompleted(job: Job<SendEmailConsumer>): Promise<void>;
}
