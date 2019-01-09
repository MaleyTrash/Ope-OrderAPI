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
import { CustomersService } from './customers.service';
import { CustomerCreateDto } from './dto/customer-create.dto';
import { CustomerEditDto } from './dto/customer-edit.dto';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CustomerLoginDto } from './dto/customer-login.dto';

@ApiUseTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @ApiOperation({ title: 'Gets all customers' })
  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @ApiOperation({ title: 'Gets customer by id' })
  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @ApiOperation({ title: 'Creates a new customer' })
  @Post('/')
  public async create(@Body() customerCreateDto: CustomerCreateDto) {
    return await this.service.create(customerCreateDto);
  }

  @ApiOperation({ title: 'Tries to log in customer' })
  @ApiResponse({status: 200, description: 'Customer data'})
  @ApiResponse({status: 401, description: 'Invalid login'})
  @Post('/login')
  public async login(@Body() customerLoginDto: CustomerLoginDto) {
    return await this.service.login(customerLoginDto);
  }

  @ApiOperation({ title: 'Deletes customer by id' })
  @ApiResponse({ status: 204, description: 'Customer deleted successfully' })
  @Delete('/:id')
  @HttpCode(204)
  public async deleteOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.deleteOneById(id);
  }

  @ApiOperation({ title: 'Edits customer by id' })
  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() customerEditDto: CustomerEditDto,
  ) {
    return await this.service.updateOneById(id, customerEditDto);
  }
}
