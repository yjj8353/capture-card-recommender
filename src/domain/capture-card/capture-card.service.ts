import { Injectable } from '@nestjs/common';
import { CaptureCardDTO } from './caputre-card.dto';
import { Repository } from 'typeorm';
import { CaptureCard } from './capture-card.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CaptureCardService {
  constructor(
    @InjectRepository(CaptureCard)
    private captureCardRepository: Repository<CaptureCard>,
  ) {}

  async findCaptureCard() {
    this.captureCardRepository.find({
      where: {
        id: 1,
      },
    });
  }

  async saveCaptureCard(captureCardDTO: CaptureCardDTO) {
    const saveResult = await this.captureCardRepository.save(
      captureCardDTO.toEntity(),
    );
    console.debug(saveResult);
  }
}
