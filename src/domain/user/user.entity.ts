import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  // USER라는 이름을 기본 테이블로 사용하는 DB가 있으므로, USERS로 설정
  name: 'USERS',
  comment: '사용자 정보가 저장되는 테이블',
})
export class User {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({
    name: 'USERNAME',
    comment: '유저 아이디 혹은 이메일',
    unique: true,
  })
  username: string;

  @Column({ name: 'EMAIL', comment: '이메일', nullable: true, unique: true })
  email: string;

  @Column({ name: 'PASSWORD', comment: '패스워드' })
  password: string;

  @Column({ name: 'LAST_NAME', comment: '성', nullable: true })
  lastName: string;

  @Column({ name: 'FIRST_NAME', comment: '이름', nullable: true })
  firstName: string;

  @Column({ name: 'ROLE', comment: '역할' })
  role: string;

  @Column({ name: 'REFRESH_TOKEN', comment: '리프레시 토큰', nullable: true })
  refreshToken: string;

  @Column({
    name: 'NON_EXPIRED',
    comment: '계정 만료여부 (계정이 만료되면 특수한 수단 외에는 복구 불가능)',
  })
  nonExpired: boolean = true;

  @Column({
    name: 'NON_LOCKED',
    comment: '계정 잠김여부 (일정 횟수 이상 인증 실패 및 관리자에 의한 차단)',
  })
  nonLocked: boolean = true;

  @Column({
    name: 'CREDENTIALS_NON_EXPIRED',
    comment: '패스워드 만료 여부 (패스워드 변경 기간 지남 등)',
  })
  credentialsNonExpired: boolean = true;

  @Column({
    name: 'ENABLED',
    comment: '계정 사용여부 (이메일 및 SMS를 이용해 인증되어야 true로 변경)',
  })
  enabled: boolean = false;

  @CreateDateColumn({
    name: 'CREATED_DATE',
    comment: '생성된 날짜',
  })
  createdDate: Date;

  @UpdateDateColumn({
    name: 'MODIFIED_DATE',
    comment: '변경된 날짜',
  })
  modifiedDate: Date;

  @DeleteDateColumn({
    name: 'DELETED_DATE',
    comment: '삭제된 날짜',
  })
  deletedDate: Date;

  @OneToOne(() => User, { lazy: true, eager: false, cascade: false })
  createdUser: User;

  @OneToOne(() => User, { lazy: true, eager: false, cascade: false })
  updatedUser: User;

  @OneToOne(() => User, { lazy: true, eager: false, cascade: false })
  deletedUser?: User;
}
