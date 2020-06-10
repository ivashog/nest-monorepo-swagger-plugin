import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('monorepo-swagger-plugin')
    .setDescription('Bug demonstration')
    .setVersion('0.0.1')
    .build();

  const swaggerSpec = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerSpec);

  await app.listen(3000);
}
bootstrap();
