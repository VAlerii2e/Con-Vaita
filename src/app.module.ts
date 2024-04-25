import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { NotesModule } from './notes/notes.module';
// import { NoteService } from './note/note.service';
// import { NoteController } from './note/note.controller';
import { BankCardsModule } from './bank-cards/bank-cards.module';
import { LoyalityCardsModule } from './loyality-cards/loyality-cards.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';


import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { BanksModule } from './banks/banks.module';

// @Module({
//   imports: [NotesModule, BankCardsModule, LoyalityCardsModule, UsersModule],
//   controllers: [AppController, NoteController],
//   providers: [AppService, NoteService],
// })


@Module({
  imports: [ 
    BankCardsModule,
    LoyalityCardsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    BanksModule
    
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
