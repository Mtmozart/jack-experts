import { EnvConfig } from 'src/config';
import { Task } from 'src/modules/task/entity/task.entity';
import { Address } from 'src/modules/user/entities/address.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceConfig = (): DataSourceOptions => {
  return {
    type: 'mysql',
    ...(EnvConfig.ENV === 'production'
      ? {
          url: EnvConfig.database.URL,
          synchronize: false,
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {
          host: EnvConfig.database.HOST_DB,
          port: EnvConfig.database.PORT_DB,
          username: EnvConfig.database.USER_DB,
          password: EnvConfig.database.PASSWORD_DB.toString(),
          database: EnvConfig.database.NAME_DB,
          synchronize: true,
          ssl: false,
        }),
    entities: [User, Address, Task],
  };
};

const dataSource = new DataSource(dataSourceConfig());

export default dataSource;
