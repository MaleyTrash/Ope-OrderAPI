import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderCreateDto } from './dto/order-create.dto';
import { OrderEditDto } from './dto/order-edit.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @Post('/')
  public async create(@Body() orderCreateDto: OrderCreateDto) {
    return await this.service.create(orderCreateDto);
  }

  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() orderEditDto: OrderEditDto,
  ) {
    return await this.service.updateOneById(id, orderEditDto);
  }
}
