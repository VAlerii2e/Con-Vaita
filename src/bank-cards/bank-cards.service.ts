import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { BankCard } from './entities/bank-card.entity';

@Injectable()
export class BankCardsService {

  constructor(
    @InjectRepository(BankCard)
    private bankCardsRepository: Repository<BankCard>
  ) { }

  async createBankCard(createBankCardDto: CreateBankCardDto) {
    const newBankCard = await this.bankCardsRepository.create(createBankCardDto);
    await this.bankCardsRepository.save(newBankCard);
    return newBankCard;
  }

  async getBankCardById(bankCardId: number) {
    const bankCard = await this.bankCardsRepository.findOne({ where: { id: bankCardId } });
    if (bankCard) {
      return bankCard;
    }
    throw new HttpException('bankCard not found', HttpStatus.NOT_FOUND);
  }

  async findAll() {
    return await this.bankCardsRepository.find();
  }

  async updateBankCard(bankCardId: number, bankCardDto: UpdateBankCardDto) {
    await this.bankCardsRepository.update(bankCardId, bankCardDto);
    const updatedBankCard = await this.bankCardsRepository.findOne({ where: { id: bankCardId } });
    if (updatedBankCard) {
      return updatedBankCard;
    }
    throw new HttpException('Bank Card not found', HttpStatus.NOT_FOUND);
  }
  async remove(bankCardId: number) {
    const deleteResponse = await this.bankCardsRepository.delete(bankCardId);
    if (!deleteResponse.affected) {
      throw new HttpException('Bank Card not found', HttpStatus.NOT_FOUND);
    }
  }
  
  
  addCard(newCard: BankCard, cards: BankCard[]): BankCard[] {
    cards.push(newCard);
    return cards;
  }

}
