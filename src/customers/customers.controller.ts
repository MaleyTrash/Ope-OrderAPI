import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerCreateDto } from './dto/customer-create.dto';
import { CustomerEditDto } from './dto/customer-edit.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @Post('/')
  public async create(@Body() customerCreateDto: CustomerCreateDto) {
    return await this.service.create(customerCreateDto);
  }

  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() customerEditDto: CustomerEditDto,
  ) {
    return await this.service.updateOneById(id, customerEditDto);
  }
}
