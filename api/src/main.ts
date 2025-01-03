import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  app.use('/stripe/webhook', express.raw({ type: 'application/json' }));
  
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
