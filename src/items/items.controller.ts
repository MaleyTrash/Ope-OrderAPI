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
import { ItemsService } from './items.service';
import { ItemCreateDto } from './dto/item-create.dto';
import { ItemEditDto } from './dto/item-edit.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly service: ItemsService) {}

  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @Post('/')
  public async create(@Body() itemCreateDto: ItemCreateDto) {
    return await this.service.create(itemCreateDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  public async deleteOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.deleteOneById(id);
  }
  
  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() itemEditDto: ItemEditDto,
  ) {
    return await this.service.updateOneById(id, itemEditDto);
  }
}
