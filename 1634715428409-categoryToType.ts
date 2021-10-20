/* eslint-disable prettier/prettier */
import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere1634713535770 implements MigrationInterface {
    name = 'migrationNameHere1634713535770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `mentions` CHANGE `category` `type` enum(`chat`,`dm`,`system`)',
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `mentions` CHANGE `type` `category` enum(`chat`,`dm`,`system`)',
        );
    }

}

// up은 변경할 내용
// down은 예전내용, 롤백