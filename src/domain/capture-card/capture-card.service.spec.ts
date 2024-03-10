import { Test, TestingModule } from '@nestjs/testing';
import { CaptureCardService } from './capture-card.service';

describe('CaptureCardService', () => {
  let service: CaptureCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaptureCardService],
    }).compile();

    service = module.get<CaptureCardService>(CaptureCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
