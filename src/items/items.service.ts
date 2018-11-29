import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemCreateDto } from './dto/item-create.dto';
import { ItemFactory } from './item.factory';
import { ItemEditDto } from './dto/item-edit.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly repo: Repository<Item>,
  ) {}

  public async getAll(): Promise<Item[]> {
    return await this.repo.find();
  }

  public async getAllByIds(ids: number[]) {
    const items = await this.repo.findByIds(ids);

    if (!items || items.length < 1)
      throw new NotFoundException('Items not found');

    return items;
  }

  public async getOneById(id: number): Promise<Item> {
    const item = await this.repo.findOne({
      where: { id },
    });

    if (!item) throw new NotFoundException();

    return item;
  }

  public async updateOneById(id: number, dto: ItemEditDto) {
    const item = await this.getOneById(id);

    if (!item) throw new NotFoundException();

    item.name = dto.name || item.name;
    item.price = dto.price || item.price;

    return await this.repo.save(item);
  }

  public async create(dto: ItemCreateDto): Promise<Item> {
    const item = ItemFactory.create(dto);

    return await this.repo.save(item);
  }

  public async deleteOneById(id: number): Promise<void> {
    const item = await this.getOneById(id);

    await this.repo.delete(item);
  }
}
