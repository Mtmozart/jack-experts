"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceConfig = void 0;
const config_1 = require("../config");
const task_entity_1 = require("../modules/task/entity/task.entity");
const address_entity_1 = require("../modules/user/entities/address.entity");
const user_entity_1 = require("../modules/user/entities/user.entity");
const typeorm_1 = require("typeorm");
const dataSourceConfig = () => {
    return {
        type: 'mysql',
        ...(config_1.EnvConfig.ENV === 'production'
            ? {
                url: config_1.EnvConfig.database.URL,
                synchronize: false,
                ssl: {
                    rejectUnauthorized: false,
                },
            }
            : {
                host: config_1.EnvConfig.database.HOST_DB,
                port: config_1.EnvConfig.database.PORT_DB,
                username: config_1.EnvConfig.database.USER_DB,
                password: config_1.EnvConfig.database.PASSWORD_DB.toString(),
                database: config_1.EnvConfig.database.NAME_DB,
                synchronize: true,
                ssl: false,
            }),
        entities: [user_entity_1.User, address_entity_1.Address, task_entity_1.Task],
    };
};
exports.dataSourceConfig = dataSourceConfig;
const dataSource = new typeorm_1.DataSource((0, exports.dataSourceConfig)());
exports.default = dataSource;
//# sourceMappingURL=dataSource.js.map