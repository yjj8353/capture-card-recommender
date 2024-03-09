import {
  Inject,
  Injectable,
  Logger,
  LoggerService,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class HttpLoggingMiddleware implements NestMiddleware {
  constructor(@Inject(Logger) private readonly log: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url, params, query, body, headers } = req;
    const originalSend = res.send;

    res.send = function (responseBody) {
      const statusCode = res.statusCode;

      // 응답 전송
      res.send = originalSend;
      res.send(responseBody);

      // 로그 남기기
      this.log.debug(
        `${method} ${url} ${statusCode}\n[REQUEST] \nParams: ${JSON.stringify(
          params,
        )}Query: ${JSON.stringify(query)}Body: ${JSON.stringify(
          body,
        )}Headers: ${JSON.stringify(
          headers,
        )}[RESPONSE]\nStatus:${statusCode}\nBody: ${responseBody}`,
      );
    }.bind(this);

    next();
  }
}
