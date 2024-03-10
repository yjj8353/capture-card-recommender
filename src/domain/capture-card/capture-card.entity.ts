import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';

@Entity()
export class CaptureCardEntity extends CommonEntity {
  @Column()
  modelCode: string;

  @Column()
  modelName: string;

  @Column()
  price: string;

  @Column()
  comeOutDate: Date;
}
