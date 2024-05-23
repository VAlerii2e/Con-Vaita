import { Exclude } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "../../banks/entities/bank.entity";

@Entity()
export class User 
{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    public name: string;  

    @Column()
    @Exclude()
    public password: string;

    @Column({unique: true})
    public email:string;
    
    @Column({nullable:false, type:"varchar", default: ""})
    public phoneNumber:string; 

    @OneToMany(() => Bank, (bank: Bank) => bank.user)
    public banks: Bank[];
}
