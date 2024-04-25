import { PartialType } from '@nestjs/mapped-types';
import { CreateBankCardDto } from './create-bank-card.dto';

export class UpdateBankCardDto extends PartialType(CreateBankCardDto) {
    
    id:number;

    userId: number;
 
    name: string; 

    money: number; 
    
    owner: string;     
}


