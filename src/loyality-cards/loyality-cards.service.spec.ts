import { Test, TestingModule } from '@nestjs/testing';
import { LoyalityCardsService } from './loyality-cards.service';

describe('LoyalityCardsService', () => {
  let service: LoyalityCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoyalityCardsService],
    }).compile();

    service = module.get<LoyalityCardsService>(LoyalityCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
