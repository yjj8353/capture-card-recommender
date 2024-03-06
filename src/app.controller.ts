import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { WinstonLogger } from 'nest-winston';

@Controller()
export class AppController {
  constructor(
    /*
     * error, warn, info, http, verbose, debug, silly 레벨을 사용하려면 winston.Logger 사용
     * error, warn, log, verbose, debug 레벨을 사용하려면 WinstonLogger 사용
     */
    @Inject(Logger) private readonly log: WinstonLogger,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/real')
  getReal(): string {
    return 'real Hello!';
  }
}
