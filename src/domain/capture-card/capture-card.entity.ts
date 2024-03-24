import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { InterfaceType } from 'src/enum/interface-type.enum';
import { Vendor } from 'src/enum/vendor.enum';

@Entity({
  name: 'CAPTURE_CARD',
  comment: '캡쳐보드 정보가 저장되는 테이블',
})
export class CaptureCard extends CommonEntity {
  @Column({
    name: 'MODEL_CODE',
    comment: '모델 코드명',
    nullable: true,
  })
  modelCode?: string;

  @Column({
    name: 'MODEL_NAME',
    comment: '모델명',
  })
  modelName: string;

  @Column({
    name: 'SUPPORT_HDR',
    comment: 'HDR 지원여부',
  })
  supportHDR: boolean;

  @Column({
    name: 'SUPPORT_VRR',
    comment: 'VRR 지원여부',
  })
  supportVRR: boolean;

  @Column({
    name: 'PRICE',
    comment: '가격',
    nullable: true,
  })
  price?: number;

  @Column({
    name: 'COME_DATE',
    comment: '출시일',
    nullable: true,
  })
  comeOutDate?: Date;

  @Column({
    name: 'INTERFACE_TYPE',
    comment: '인터페이스',
    nullable: true,
    type: 'enum',
    enum: InterfaceType,
  })
  interfaceType?: InterfaceType;

  @Column({
    name: 'VENDOR',
    comment: '업체',
    nullable: true,
    type: 'enum',
    enum: Vendor,
  })
  vendor?: Vendor;
}
