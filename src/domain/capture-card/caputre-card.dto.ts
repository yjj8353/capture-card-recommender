import { Builder } from 'builder-pattern';
import { CommonDTO } from '../common/common.dto';
import { CaptureCard } from './capture-card.entity';

export class CaptureCardDTO extends CommonDTO {
  modelCode: string;
  modelName: string;
  supportHDR: boolean;
  supportVRR: boolean;
  price?: number;
  comeOutDate?: Date;
  type?: string;
  vendor?: string;

  constructor(dto: CaptureCardDTO) {
    super();
    this.id = dto?.id;
    this.createdDate = dto?.createdDate;
    this.modifiedDate = dto?.modifiedDate;
    this.deletedDate = dto?.deletedDate;
    this.createdUser = dto?.createdUser;
    this.updatedUser = dto?.updatedUser;
    this.deletedUser = dto?.deletedUser;
    this.modelCode = dto.modelCode;
    this.modelName = dto.modelName;
    this.supportHDR = dto.supportHDR;
    this.supportVRR = dto.supportVRR;
    this.price = dto?.price;
    this.comeOutDate = dto?.comeOutDate;
    this.type = dto?.type;
    this.vendor = dto?.vendor;
  }

  public toEntity(): CaptureCard {
    return Builder<CaptureCard>()
      .id(this.id)
      .modelCode(this.modelCode)
      .modelName(this.modelName)
      .supportHDR(this.supportHDR)
      .supportVRR(this.supportVRR)
      .price(this.price)
      .comeOutDate(this.comeOutDate)
      .build();
  }
}
