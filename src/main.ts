import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import logger from './config/logger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: logger,
  });

  await app.listen(3000);

  // Hot reload 설정
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
