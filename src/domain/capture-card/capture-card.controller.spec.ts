import { Test, TestingModule } from '@nestjs/testing';
import { CaptureCardController } from './capture-card.controller';

describe('CaptureCardController', () => {
  let controller: CaptureCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptureCardController],
    }).compile();

    controller = module.get<CaptureCardController>(CaptureCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
