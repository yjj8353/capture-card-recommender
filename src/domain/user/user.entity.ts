import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../common/common.entity';

@Entity()
export class UserEntity extends CommonEntity {
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
}
