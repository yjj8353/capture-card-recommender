import {
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
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

  @DeleteDateColumn()
  deletedDate: Date;

  @JoinColumn()
  @OneToOne(() => UserEntity, { lazy: true, eager: false, cascade: false })
  createdUser: UserEntity;

  @JoinColumn()
  @OneToOne(() => UserEntity, { lazy: true, eager: false, cascade: false })
  updatedUser: UserEntity;

  @JoinColumn()
  @OneToOne(() => UserEntity, { lazy: true, eager: false, cascade: false })
  deletedUser?: UserEntity;
}
