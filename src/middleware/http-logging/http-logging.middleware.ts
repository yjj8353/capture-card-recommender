import { Inject, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { WinstonLogger } from 'nest-winston';

@Injectable()
export class HttpLoggingMiddleware implements NestMiddleware {
  constructor(@Inject(Logger) private readonly log: WinstonLogger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url, params, query, body, headers } = req;
    const originalSend = res.send;

    res.send = function (responseBody: any) {
      const statusCode = res.statusCode;

      // 응답 전송
      res.send = originalSend;
      res.send(responseBody);

      // 로그 남기기
      this.log.debug(
        `${method} ${url} ${statusCode}
[REQUEST]
Params: ${JSON.stringify(params)}
Query: ${JSON.stringify(query)}
Body: ${JSON.stringify(body)}
Headers: ${JSON.stringify(headers)}

[RESPONSE]
Status: ${statusCode}
Body: ${responseBody}
`,
      );
    }.bind(this);

    next();
  }
}
