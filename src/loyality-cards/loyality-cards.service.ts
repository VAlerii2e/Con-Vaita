import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Equal, FindOptionsWhere, Repository } from 'typeorm';

import { CreateLoyalityCardDto } from './dto/create-loyality-card.dto';
import { UpdateLoyalityCardDto } from './dto/update-loyality-card.dto';
import {LoyalityCard} from './entities/loyality-card.entity';
import { log } from 'console';
import { Bank } from '../banks/entities/bank.entity';



@Injectable()
export class LoyalityCardsService {

  constructor(
    @InjectRepository(LoyalityCard)
    private loyalityCardsRepository: Repository<LoyalityCard>,    
  ) { }

  async createLoyalityCard(createLoyalityCardDto: CreateLoyalityCardDto) { 
    const newLoyalityCard = await this.loyalityCardsRepository.create(createLoyalityCardDto);
    console.log("==newLoyalityCard==");
    console.log(newLoyalityCard);
    await this.loyalityCardsRepository.save(createLoyalityCardDto);
    return newLoyalityCard;
  }

  async getLoyalityCardById(id: number) {
    console.log("==getLoyalityCardById==")
    console.log(+id);
    const [ loyalityCard ] = await this.loyalityCardsRepository.find({ 
      where: { loyalityCardId: id } as FindOptionsWhere<LoyalityCard>,
      relations: {bank: true},      
    } );
  
    if (loyalityCard) {
      return loyalityCard;
    }

    throw new HttpException('Loyality not found', HttpStatus.NOT_FOUND);
    
  }

  async findAll() {
    return await this.loyalityCardsRepository.find();
  }

  async updateLoyalityCard(bankCardId: number, bankCardDto: UpdateLoyalityCardDto) {
    // await this.loyalityCardsRepository.update(bankCardId, bankCardDto);
    // const updatedBankCard = await this.loyalityCardsRepository.findOne({ where: { id: bankCardId } });
    // if (updatedBankCard) {
    //   return updatedBankCard;
    // }
    // throw new HttpException('Bank Card not found', HttpStatus.NOT_FOUND);
  }
  async remove(bankCardId: number) {
    const deleteResponse = await this.loyalityCardsRepository.delete(bankCardId);
    if (!deleteResponse.affected) {
      throw new HttpException('Bank Card not found', HttpStatus.NOT_FOUND);
    }
  }
  
  
  addCard(newCard: LoyalityCard, cards: LoyalityCard[]): LoyalityCard[] {
    cards.push(newCard);
    return cards;
  }

}


//   constructor(id: number = 0, user:User, userId: number = 0, expirationDate: string = "", createdAt:string = "", updatedAt:string = "", owner:string = "")
//   {
//       this.id = id;
//       this.userId = user.id;
//       this.expirationDate = expirationDate;
//       this.createdAt = createdAt;
//       this.updatedAt = updatedAt;
//       this.owner = owner;
//   }
//   get getLoyalityCardInfo():{ id: number, userId: number, expirationDate: string, createdAt: string,updatedAt:string, owner:string }
//   {
//     return {
//       id:this.id,
//         userId: this.userId,
//         expirationDate:this.expirationDate,
//         createdAt:this.createdAt,
//         updatedAt:this.updatedAt,
//         owner: this.owner
//     };
//   }
  
  
//   addLoyalityCard(newLoyalityCard: LoyalityCard, loyalityCards: LoyalityCard[]): LoyalityCard[] {
//       loyalityCards.push(newLoyalityCard);
//     return loyalityCards;
// }


// deleteLoyalityCard(loyalityCardId: number, loyalityCards: LoyalityCard[]): LoyalityCard[] {
//     return loyalityCards.filter(loyalityCard => loyalityCard.id !== loyalityCardId);
// }

// updateLoyalityCard(updatedLoyalityCard: LoyalityCard, loyalityCards: LoyalityCard[]): LoyalityCard[] {
//     return loyalityCards.map( loyalityCard =>  loyalityCard.id === updatedLoyalityCard.id ? updatedLoyalityCard : loyalityCard);
// }   