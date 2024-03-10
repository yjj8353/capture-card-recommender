import { Module } from '@nestjs/common';
import { CaptureCardService } from './capture-card.service';

@Module({
  providers: [CaptureCardService],
})
export class CaptureCardModule {}
