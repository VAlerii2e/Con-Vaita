import { PartialType } from '@nestjs/mapped-types';
import { CreateLoyalityCardDto } from './create-loyality-card.dto';

export class UpdateLoyalityCardDto extends PartialType(CreateLoyalityCardDto) {}
