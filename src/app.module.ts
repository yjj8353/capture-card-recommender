import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpLoggingMiddleware } from './middleware/http-logging/http-logging.middleware';
import { CaptureCardModule } from './domain/capture-card/capture-card.module';
import { UserService } from './domain/user/user.service';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CaptureCardModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*');
  }
}
