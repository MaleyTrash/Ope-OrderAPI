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
import { ApiOperation, ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly service: ItemsService) {}

  @ApiOperation({ title: 'Gets all items' })
  @Get('/')
  public async getAll() {
    return await this.service.getAll();
  }

  @ApiOperation({ title: 'Gets item by id' })
  @Get('/:id')
  public async getOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.getOneById(id);
  }

  @ApiOperation({ title: 'Create a new item' })
  @Post('/')
  public async create(@Body() itemCreateDto: ItemCreateDto) {
    return await this.service.create(itemCreateDto);
  }

  @ApiOperation({ title: 'Deletes item by id' })
  @ApiResponse({ status: 204, description: 'Item deleted successfully' })
  @Delete('/:id')
  @HttpCode(204)
  public async deleteOneById(@Param('id', new ParseIntPipe()) id: number) {
    return await this.service.deleteOneById(id);
  }

  @ApiOperation({ title: 'Edits item by id' })
  @Patch('/:id')
  public async patchOneById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() itemEditDto: ItemEditDto,
  ) {
    return await this.service.updateOneById(id, itemEditDto);
  }
}
