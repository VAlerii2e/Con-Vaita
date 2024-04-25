import { User } from "../../users/entities/user.entity";

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BankCard 
{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public userId: number;
 
    @Column()
    public name: string; 

    @Column()
    public money: number; 
    
    @Column()
    public owner: string;    
    
    
}

