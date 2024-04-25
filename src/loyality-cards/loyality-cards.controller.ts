import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LoyalityCardsService } from './loyality-cards.service';
import { CreateLoyalityCardDto } from './dto/create-loyality-card.dto';
import { UpdateLoyalityCardDto } from './dto/update-loyality-card.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';

@Controller('loyality-cards')
export class LoyalityCardsController {
  constructor(private readonly loyalityCardsService: LoyalityCardsService) {}

  @UseGuards(JwtAuthenticationGuard)
  @Post()
  create(@Body() createLoyalityCardDto: CreateLoyalityCardDto){
    return this.loyalityCardsService.createLoyalityCard(createLoyalityCardDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  findAll() {
    return this.loyalityCardsService.findAll();
  }
  
  @UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyalityCardsService.getLoyalityCardById(+id);
  }
  
  @UseGuards(JwtAuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoyalityCardDto: UpdateLoyalityCardDto) {
    return this.loyalityCardsService.updateLoyalityCard(+id, updateLoyalityCardDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyalityCardsService.remove(+id);
  }
}
