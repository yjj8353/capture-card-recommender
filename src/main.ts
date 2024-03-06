import { NestFactory } from '@nestjs/core';
import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import { WinstonModule } from 'nest-winston';
const { combine, colorize, timestamp, label, printf } = winston.format;
const logDir = `${process.cwd()}/logs`;

import { AppModule } from './app.module';

declare const module: any;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'warn' : 'verbose',
          format: combine(
            colorize({
              colors: {
                error: 'red',
                warn: 'yellow',
                info: 'green',
                verbose: 'blue',
                debug: 'porple',
              },
            }),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            label({ label: 'App' }),
            logFormat,
          ),
        }),

        new winstonDaily({
          level: 'info',
          datePattern: 'YYYY-MM-DD',
          dirname: logDir,
          filename: `%DATE%.log`,
          maxFiles: 30,
          zippedArchive: true,
        }),

        new winstonDaily({
          level: 'error',
          datePattern: 'YYYY-MM-DD',
          dirname: logDir + '/error',
          filename: `%DATE%.error.log`,
          maxFiles: 30,
          zippedArchive: true,
        }),
      ],
    }),
  });

  await app.listen(3000);

  // Hot reload 설정
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
