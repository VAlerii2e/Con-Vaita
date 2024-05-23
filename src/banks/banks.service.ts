import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from './entities/bank.entity';
import { Repository } from 'typeorm';
import { ExternalExceptionsHandler } from '@nestjs/core/exceptions/external-exceptions-handler';

@Injectable()
export class BanksService {
  // constructor(
  //   @InjectRepository(Bank)
  //   private banksRepository: Repository<Bank>,    
  // ) { }
  create(createBankDto: CreateBankDto) {
    return 'This action adds a new bank';
  }

  findAll() {
    return `This action returns all banks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }

  // getAllBanks() {
  //   return this.banksRepository.find({ relations: ['user'] });
  // }
   
  // async getPostById(id: number) {
  //   const post = await this.banksRepository.findOne( { relations: ['author'] });
  //   if (post) {
  //     return post;
  //   }
    
  // }
   
  
}
