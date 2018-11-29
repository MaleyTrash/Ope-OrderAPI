import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import { ItemsModule } from 'items/items.module';
import { CustomersModule } from 'customers/customers.module';
import { OrdersController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), ItemsModule, CustomersModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
