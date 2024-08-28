import { RedisOptions } from 'ioredis';
import { EnvConfig } from 'src/config';

export const redisConfig = (): RedisOptions => {
  return {
    host: EnvConfig.REDIS_DATABASE.REDIS_HOST,
    port: EnvConfig.REDIS_DATABASE.REDIS_PORT,
  };
};
