import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '유저 아이디 혹은 이메일', unique: true })
  username: string;

  @Column({ comment: '이메일', nullable: true, unique: true })
  email: string;

  @Column({ comment: '패스워드' })
  password: string;

  @Column({ comment: '성', nullable: true })
  lastName: string;

  @Column({ comment: '이름', nullable: true })
  firstName: string;

  @Column({ comment: '역할' })
  role: string;

  @Column({ comment: '리프레시 토큰', nullable: true })
  refreshToken: string;

  @Column({
    comment: '계정 만료여부 (계정이 만료되면 특수한 수단 외에는 복구 불가능)',
  })
  nonExpired: boolean = true;

  @Column({
    comment: '계정 잠김여부 (일정 횟수 이상 인증 실패 및 관리자에 의한 차단)',
  })
  nonLocked: boolean = true;

  @Column({
    comment: '패스워드 만료 여부 (패스워드 변경 기간 지남 등)',
  })
  credentialsNonExpired: boolean = true;

  @Column({
    comment: '계정 사용여부 (이메일 및 SMS를 이용해 인증되어야 true로 변경)',
  })
  enabled: boolean = false;

  @CreateDateColumn({
    comment: '생성된 날짜',
  })
  createdDate: Date;

  @UpdateDateColumn({
    comment: '변경된 날짜',
  })
  modifiedDate: Date;

  @DeleteDateColumn({
    comment: '삭제된 날짜',
  })
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
