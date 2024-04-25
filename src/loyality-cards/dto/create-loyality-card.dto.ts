import { Bank } from "../../banks/entities/bank.entity";


export class CreateLoyalityCardDto {
    userId: number;
    expirationDate: string;
    createdAt:string;
    updatedAt:string;
    owner:string;    
    // bankId: number;
    bank: Bank;
}
