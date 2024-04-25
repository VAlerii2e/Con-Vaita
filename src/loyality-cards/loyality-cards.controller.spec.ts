import { Test, TestingModule } from '@nestjs/testing';
import { LoyalityCardsController } from './loyality-cards.controller';
import { LoyalityCardsService } from './loyality-cards.service';

describe('LoyalityCardsController', () => {
  let controller: LoyalityCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoyalityCardsController],
      providers: [LoyalityCardsService],
    }).compile();

    controller = module.get<LoyalityCardsController>(LoyalityCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
