import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import * as https from 'https';

import { ExpressInstance } from './express-instance';
import { AppModule } from './app/app.module';
import { Environments } from './shared/environments';
import { DatabaseExceptionFilter, AuthExceptionFilter } from './shared/exceptions';

if (fs.existsSync('.env')) {
  require('dotenv').config();
}

const logger = new Logger('HttpsServer');
const expressInstance = new ExpressInstance();
const app = expressInstance.bootstrap();

async function bootstrap() {
  const server = await NestFactory.create(AppModule, app);
  server.connectMicroservice({
    transport: Transport.REDIS,
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  });
  server.setGlobalPrefix(app.get('prefix'));
  server.useGlobalFilters(new AuthExceptionFilter());
  server.useGlobalFilters(new DatabaseExceptionFilter());
  server.init();
  await server.startAllMicroservicesAsync();
}

bootstrap();

const options = {
  key: app.get('key'),
  cert: app.get('cert'),
  ca: app.get('ca'),
};

const httpsInstance = https.createServer(options, app).listen(app.get('port'));
httpsInstance.on('listening', () => {
  logger.log('');
  logger.log('');
  logger.log(`Fights service ready and running on ${app.get('host')}:${app.get('port')}`);
  logger.log(``);
  logger.log(`-------------------------------------------------------`);
  logger.log(`Environment  : ${Environments.getEnv()}`);
  logger.log(`Version      : ${Environments.getPackageInfo().version}`);
  logger.log(``);
  logger.log(`-------------------------------------------------------`);
  logger.log(``);
});
