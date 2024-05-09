import { Exclude } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { LoyalityCardsService } from "../../loyality-cards/loyality-cards.service";
import { LoyalityCard } from "../../loyality-cards/entities/loyality-card.entity";
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

    @OneToMany(() => Bank, (bank: Bank) => bank.owner)
    public bank: Bank[];
}
