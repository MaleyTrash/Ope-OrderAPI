import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemCreateDto } from './dto/item-create.dto';
import { ItemFactory } from './item.factory';

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
    return await this.repo.findByIds(ids);
  }

  public async getOneById(id: number): Promise<Item> {
    const item = await this.repo.findOne({
      where: { id },
    });

    if (!item) throw new NotFoundException();

    return item;
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
