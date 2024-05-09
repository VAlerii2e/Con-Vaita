import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

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

    @ManyToOne(() => User, (author: User) => author.bank)
    public owner:string
}
