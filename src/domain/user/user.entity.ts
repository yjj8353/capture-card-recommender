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

  @Column()
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  firstName: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column()
  nonExpired: boolean = true;

  @Column()
  nonLocked: boolean = true;

  @Column()
  credentialsNonExpired: boolean = true;

  @Column()
  enabled: boolean = false;

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
