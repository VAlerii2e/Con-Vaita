import { Test, TestingModule } from '@nestjs/testing';
import { BankCardsService } from './bank-cards.service';
import BankCardsController from './bank-cards.controller';

describe('BankCardsController', () => {
  let controller: BankCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankCardsController],
      providers: [BankCardsService],
    }).compile();

    controller = module.get<BankCardsController>(BankCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
