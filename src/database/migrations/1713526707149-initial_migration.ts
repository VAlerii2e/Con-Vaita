import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1713526707149 implements MigrationInterface {
    name = 'InitialMigration1713526707149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phoneNumber" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phoneNumber" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL`);
    }

}
