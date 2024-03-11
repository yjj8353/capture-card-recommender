import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';
import { InterfaceType } from 'src/enum/interface-type.enum';
import { Vendor } from 'src/enum/vendor.enum';

@Entity({ name: 'capture_card' })
export class CaptureCardEntity extends CommonEntity {
  @Column({ comment: '모델 코드명' })
  modelCode: string;

  @Column({ comment: '모델명' })
  modelName: string;

  @Column({ comment: 'HDR 지원여부' })
  supportHDR: boolean;

  @Column({ comment: 'VRR 지원여부' })
  supportVRR: boolean;

  @Column({ comment: '가격' })
  price: number;

  @Column({ comment: '출시일' })
  comeOutDate: Date;

  @Column({ comment: '인터페이스', type: 'enum', enum: InterfaceType })
  type: InterfaceType;

  @Column({ comment: '업체', type: 'enum', enum: Vendor })
  vendor: Vendor;
}
