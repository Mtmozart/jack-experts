"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cors_option_1 = require("./config/cors.option");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: cors_option_1.corsOptions });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('jack-experts-api')
        .setDescription('Api para o estágio da jack experts, desafio.')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'JWT-auth')
        .addTag('user')
        .addTag('auth')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map