import { config as AWSConfig } from 'aws-sdk';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3003);
}

bootstrap();

AWSConfig.update({
  accessKeyId: 'AKIARSB5IW52HNXBXHPX',
  secretAccessKey: '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',
  region: 'ap-southeast-2',
});
