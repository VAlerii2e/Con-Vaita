import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLoyalityCardId1713527936920 implements MigrationInterface {
    name = 'UpdateLoyalityCardId1713527936920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loyality_card" RENAME COLUMN "id" TO "loyalityCardId"`);
        await queryRunner.query(`ALTER TABLE "loyality_card" RENAME CONSTRAINT "PK_88b2acbd3a3128cb4ab28cc9c87" TO "PK_d78ee0c942a24f1b9411d420172"`);
        await queryRunner.query(`ALTER SEQUENCE "loyality_card_id_seq" RENAME TO "loyality_card_loyalityCardId_seq"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER SEQUENCE "loyality_card_loyalityCardId_seq" RENAME TO "loyality_card_id_seq"`);
        await queryRunner.query(`ALTER TABLE "loyality_card" RENAME CONSTRAINT "PK_d78ee0c942a24f1b9411d420172" TO "PK_88b2acbd3a3128cb4ab28cc9c87"`);
        await queryRunner.query(`ALTER TABLE "loyality_card" RENAME COLUMN "loyalityCardId" TO "id"`);
    }

}
