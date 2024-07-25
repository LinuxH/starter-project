import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'warn', 'error']
  });
  const logger = app.get(Logger);

  const port = process.env.PORT;

  if (!port) {
    throw new Error('No port specified.')
  }

  await app.listen(port, () => {
    logger.log(`Running API in mode ${process.env.NODE_ENV} on port ${port}`, 'bootstrap');
  });
}
bootstrap();
