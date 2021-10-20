/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ChannelChats } from './src/entities/ChannelChats';
import { ChannelMembers } from './src/entities/ChannelMembers';
import { Channels } from './src/entities/Channels';
import { DMs } from './src/entities/DMs';
import { Mentions } from './src/entities/Mentions';
import { Users } from './src/entities/Users';
import { WorkspaceMembers } from './src/entities/WorkspaceMembers';
import { Workspaces } from './src/entities/Workspaces';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  username: 'root',
  password: 'vmfkdtm12!',
  database: 'slack_prac',
  entities: [
    ChannelChats,
    ChannelMembers,
    Channels,
    DMs,
    Mentions,
    Users,
    WorkspaceMembers,
    Workspaces,
  ],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false, // 개발환경일 때만 true 실제 환경에서는 false, 처음에 한번만 싱크로나이드해서 true해서 테이블만들고, 그 다음부턴 false, true로했다가 데이터 다날려먹음, 그냥 한번하고 나서 false로 하면 됨
  logging: true, // 개발중일 떈 logging true로 해놓고, orm이 쿼리를 어떤 식으로 날렸는지 확인하고, 따로 튜닝작업도 해야함
  keepConnectionAlive: true, // 이걸 켜놔야 핫리로드할 떄 계속 db 연결하고 있음
};

export = config;
