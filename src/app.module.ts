import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpLoggingMiddleware } from './middleware/http-logging/http-logging.middleware';
import { CaptureCardController } from './domain/capture-card/capture-card.controller';
import { CaptureCardModule } from './domain/capture-card/capture-card.module';
import { UserService } from './domain/user/user.service';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [CaptureCardModule, UserModule],
  controllers: [AppController, CaptureCardController],
  providers: [AppService, Logger, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*');
  }
}
