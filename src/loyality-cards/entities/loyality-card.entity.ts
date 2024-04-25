import { number } from "@hapi/joi";
import { Bank } from "../../banks/entities/bank.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LoyalityCard 
{
    @PrimaryGeneratedColumn()
    private loyalityCardId: number;

    @Column()
    private userId: number; 

    @Column()
    private expirationDate: string;

    @Column()
    private createdAt:string;

    @Column()
    private updatedAt:string;

    @Column()
    private owner: User;
    
    @OneToOne(() => Bank)
    @JoinColumn()
    public bank: Bank;

   // запитати стосовно  private and public

}
//export default LoyalityCard;