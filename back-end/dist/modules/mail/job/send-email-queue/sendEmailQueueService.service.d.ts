import { SendEmailQueue } from '../../types/sendEmailQueue.types';
import { Queue } from 'bull';
export declare class SendEmailQueueService {
    private sendEmailQueue;
    constructor(sendEmailQueue: Queue);
    execute(sendEmailQueue: SendEmailQueue): Promise<void>;
}
