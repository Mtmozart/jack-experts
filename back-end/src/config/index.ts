import * as dotenv from 'dotenv';
dotenv.config();

export const EnvConfig = {
  database: {
    HOST_DB: process.env.HOST_DB || 'localhost',
    PORT_DB: +process.env.PORT_DB || 3306,
    USER_DB: process.env.USER_DB || 'root',
    PASSWORD_DB: process.env.PASSWORD_DB || 'matheus123',
    NAME_DB: process.env.NAME_DB || 'jack-experts',
    URL: process.env.URL_DATABASE || '',
  },
  ENV: process.env.NODE_ENV || 'development',
  secret: process.env.JWT_SECRET || 'default-secret',
  EMAIL: {
    HOST_EMAIL: process.env.HOST_EMAIL || 'smtp.gmail.com',
    PORT_EMAIL: +process.env.PORT_EMAIL || 587,
    USER_AUTH_EMAIL: process.env.USER_AUTH_EMAIL || '',
    EMAIL_PASS_EMAIL: process.env.PASS_EMAIL || '',
  },
  REDIS_DATABASE: {
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: +process.env.REDIS_PORT || 6379,
  },
};
