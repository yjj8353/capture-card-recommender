import {
  createParamDecorator,
  Controller,
  Get,
  ExecutionContext,
  Post,
} from '@nestjs/common';
import { CaptureCardDTO } from './caputre-card.dto';
import { CaptureCardService } from './capture-card.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CaptureCardParams = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const params = request['params'];

    return params;
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CaptureCardQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request['query'];

    return query;
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CaptureCardBody = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const body = request['body'];

    return body;
  },
);

@Controller('capture-card')
export class CaptureCardController {
  constructor(private readonly captureCardService: CaptureCardService) {}

  @Get()
  find(@CaptureCardQuery() captureCard: CaptureCardDTO): string {
    console.debug(captureCard);
    return 'heloo!';
  }

  @Post()
  save(@CaptureCardBody() captureCard: CaptureCardDTO): boolean {
    this.captureCardService.save(new CaptureCardDTO(captureCard));
    return true;
  }
}
