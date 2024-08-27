import { TaskStatus } from '../enum/taskStatus';
export declare class SearchDto {
    title?: string;
    favorite?: boolean;
    status?: TaskStatus;
    sortBy?: 'favorite' | 'status';
    sortOrder?: 'ASC' | 'DESC';
}
