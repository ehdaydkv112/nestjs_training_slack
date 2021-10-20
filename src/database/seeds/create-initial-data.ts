/* eslint-disable prettier/prettier */
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Workspaces } from "../../../src/entities/Workspaces";
import { Channels } from '../../../src/entities/Channels';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
    .createQueryBuilder()
    .insert()
    .into(Workspaces)
    .values([{id: 1, name: 'Slact', url: 'slact'}]).execute();
    await connection
    .createQueryBuilder()
    .insert()
    .into(Channels)
    .values([{id : 1, name : '일반', WorkspaceId: 1, private: false}]).execute();
  //   await connection
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Users)
  //   .values([{id : 1, name : '일반asf', password: '', private: false}]);
  }
}

// npm run seed:run 으로 실행