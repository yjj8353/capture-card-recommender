import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { config } from 'dotenv';
import { CaptureCard } from 'src/domain/capture-card/capture-card.entity';
import { UserEntity } from 'src/domain/user/user.entity';

config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  entities: [CaptureCard, UserEntity],
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  dropSchema: true,
};
