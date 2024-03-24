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
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @CreateDateColumn({ name: 'CREATE_DATE', comment: '생성된 날짜' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'MODIFIED_DATE', comment: '변경된 날짜' })
  modifiedDate: Date;

  @DeleteDateColumn({ name: 'DELETED_DATE', comment: '삭제된 날짜' })
  deletedDate: Date;

  @JoinColumn({
    name: 'CREATED_USER',
  })
  @OneToOne(() => UserEntity, {
    lazy: true,
    eager: false,
    cascade: false,
  })
  createdUser: UserEntity;

  @JoinColumn({
    name: 'MODIFIED_USER',
  })
  @OneToOne(() => UserEntity, {
    lazy: true,
    eager: false,
    cascade: false,
  })
  modifiedUser: UserEntity;

  @JoinColumn({
    name: 'DELETE_USER',
  })
  @OneToOne(() => UserEntity, {
    lazy: true,
    eager: false,
    cascade: false,
    nullable: true,
  })
  deletedUser?: UserEntity;
}
