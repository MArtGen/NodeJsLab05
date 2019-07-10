import { Module } from '@nestjs/common';
import { BackService } from './back.service';
import { BackController } from './back.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersSchema } from './schemas/back.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrdersSchema }])
 ],
  providers: [BackService],
  controllers: [BackController]
})
export class BackModule {}