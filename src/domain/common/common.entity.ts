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

  @CreateDateColumn({ comment: '생성된 날짜' })
  createdDate: Date;

  @UpdateDateColumn({ comment: '변경된 날짜' })
  modifiedDate: Date;

  @DeleteDateColumn({ comment: '삭제된 날짜' })
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
