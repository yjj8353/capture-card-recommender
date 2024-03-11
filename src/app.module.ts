import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpLoggingMiddleware } from './middleware/http-logging/http-logging.middleware';
import { CaptureCardController } from './domain/capture-card/capture-card.controller';
import { CaptureCardModule } from './domain/capture-card/capture-card.module';
import { UserService } from './domain/user/user.service';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database/typeorm.config';
import { VendorController } from './domain/vendor/vendor.controller';
import { VendorModule } from './domain/vendor/vendor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CaptureCardModule,
    UserModule,
    VendorModule,
  ],
  controllers: [AppController, CaptureCardController, VendorController],
  providers: [AppService, Logger, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggingMiddleware).forRoutes('*');
  }
}
