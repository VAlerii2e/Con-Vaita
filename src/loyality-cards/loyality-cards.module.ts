import { Module } from '@nestjs/common';
import { LoyalityCardsService } from './loyality-cards.service';
import { LoyalityCardsController } from './loyality-cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {LoyalityCard}  from './entities/loyality-card.entity';
import { Bank } from '../banks/entities/bank.entity';



@Module({
  imports: [TypeOrmModule.forFeature([LoyalityCard])],
  controllers: [LoyalityCardsController],
  providers: [LoyalityCardsService],
})
export class LoyalityCardsModule {}
