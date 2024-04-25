import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BankCardsService } from './bank-cards.service';
import { CreateBankCardDto } from './dto/create-bank-card.dto';
import { UpdateBankCardDto } from './dto/update-bank-card.dto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';

@Controller('bank-cards')
export default class BankCardsController {
  constructor(
    private readonly bankCardsService: BankCardsService
  ) {}

  @UseGuards(JwtAuthenticationGuard)
  @Post()
  create(@Body() createBankCardDto: CreateBankCardDto) {
    return this.bankCardsService.createBankCard(createBankCardDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  findAll() {
    return this.bankCardsService.findAll();
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankCardsService.getBankCardById(+id);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankCardDto: UpdateBankCardDto) {
    return this.bankCardsService.updateBankCard(+id, updateBankCardDto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankCardsService.remove(+id);
  }
}
