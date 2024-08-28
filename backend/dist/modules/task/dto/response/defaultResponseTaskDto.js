"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultResponseTaskDto {
    constructor(task) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.favorite = task.favorite;
        this.status = task.status;
        this.color = task.color;
        this.createdAt = task.createdAt;
        this.updateAt = task.updatedAt;
    }
}
exports.default = DefaultResponseTaskDto;
//# sourceMappingURL=defaultResponseTaskDto.js.map