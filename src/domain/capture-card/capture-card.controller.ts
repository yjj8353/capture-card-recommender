import {
  createParamDecorator,
  Controller,
  Get,
  ExecutionContext,
  Post,
  Patch,
} from '@nestjs/common';
import { CaptureCardDTO } from './caputre-card.dto';
import { CaptureCardService } from './capture-card.service';
import { InterfaceType } from 'src/enum/interface-type.enum';

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
  findCaptureCard(@CaptureCardQuery() captureCard: CaptureCardDTO): string {
    console.debug(captureCard);
    return 'heloo!';
  }

  @Post()
  saveNewCaptureCard(@CaptureCardBody() captureCard: CaptureCardDTO): boolean {
    console.log(captureCard);
    console.log(InterfaceType[captureCard.interfaceType]);

    this.captureCardService.saveCaptureCard(new CaptureCardDTO(captureCard));
    return true;
  }

  @Patch()
  updateCaptureCard(@CaptureCardBody() captureCard: CaptureCardDTO): boolean {
    this.captureCardService.saveCaptureCard(new CaptureCardDTO(captureCard));
    return true;
  }
}
