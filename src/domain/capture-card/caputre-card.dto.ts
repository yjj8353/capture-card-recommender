import { Builder } from 'builder-pattern';
import { CommonDTO } from '../common/common.dto';
import { CaptureCard } from './capture-card.entity';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { InterfaceType } from 'src/enum/interface-type.enum';
import { Vendor } from 'src/enum/vendor.enum';

export class CaptureCardDTO extends CommonDTO {
  modelCode?: string;

  @IsNotEmpty()
  modelName: string;
  supportHDR: boolean = false;
  supportVRR: boolean = false;
  price?: number;
  comeOutDate?: Date;

  @IsEnum(Object.values(InterfaceType))
  interfaceType?: InterfaceType;

  @IsEnum(Object.values(Vendor))
  vendor?: Vendor;

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
    this.interfaceType = dto?.interfaceType;
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
      .interfaceType(this.interfaceType)
      .vendor(this.vendor)
      .build();
  }
}
