import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bank {
    @PrimaryGeneratedColumn()
    private bankId: number;

    @Column()
    private title: string;

    @Column()
    private adress:string;

    @Column()
    private createdAt:string;

    @Column()
    private owner:string
}
