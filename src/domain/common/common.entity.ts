import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

export abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  modifiedDate: Date;

  @Column()
  createdUser: UserEntity;

  @Column()
  modifiedUser: UserEntity;
}
