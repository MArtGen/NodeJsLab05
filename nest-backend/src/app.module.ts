import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BackModule } from './back/back.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-back', { useNewUrlParser: true }),
    BackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
