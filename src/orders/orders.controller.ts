import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Delete,
  HttpCode,
  Patch,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderCreateDto } from './dto/order-create.dto';
import { OrderEditDto } from './dto/order-edit.dto';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiUseTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @ApiOperation({ title: 'Gets all orders' })
  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @ApiOperation({ title: 'Gets order by id' })
  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @ApiOperation({ title: 'Creates a new order' })
  @Post('/')
  public async create(@Body() orderCreateDto: OrderCreateDto) {
    return await this.service.create(orderCreateDto);
  }

  @ApiOperation({ title: 'Deletes order by id' })
  @ApiResponse({ status: 204, description: 'Order deleted successfully' })
  @Delete('/:id')
  @HttpCode(204)
  public async deleteOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.deleteOneById(id);
  }

  @ApiOperation({ title: 'Edits order by id' })
  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() orderEditDto: OrderEditDto,
  ) {
    return await this.service.updateOneById(id, orderEditDto);
  }
}
