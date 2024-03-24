import { Test, TestingModule } from '@nestjs/testing';
import { CaptureCardController } from './capture-card.controller';
import { CaptureCardService } from './capture-card.service';

describe('CaptureCardController', () => {
  let controller: CaptureCardController;
  // let service: CaptureCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptureCardController],
      providers: [CaptureCardService],
    }).compile();

    controller = module.get<CaptureCardController>(CaptureCardController);
    // service = module.get<CaptureCardService>(CaptureCardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findCaptureCard', () => {
    it('조건을 통해 캡쳐보드를 검색합니다.', async () => {
      // const captureCardDTO = { id: 1 };
    });
  });
});
