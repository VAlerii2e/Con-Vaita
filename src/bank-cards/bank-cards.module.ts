import { Module } from '@nestjs/common';
import { BankCardsService } from './bank-cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import BankCardsController from './bank-cards.controller';
import { BankCard } from './entities/bank-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankCard])],
  controllers: [BankCardsController],
  providers: [BankCardsService],
})
export class BankCardsModule {}
