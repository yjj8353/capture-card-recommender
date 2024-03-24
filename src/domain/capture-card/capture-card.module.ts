import { Module } from '@nestjs/common';
import { CaptureCardService } from './capture-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaptureCard } from './capture-card.entity';
import { CaptureCardController } from './capture-card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CaptureCard])],
  providers: [CaptureCardService],
  controllers: [CaptureCardController],
})
export class CaptureCardModule {}
