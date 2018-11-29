import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderCreateDto } from './dto/order-create.dto';
import { ItemsService } from 'items/items.service';
import { CustomersService } from 'customers/customers.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
    private readonly items: ItemsService,
    private readonly customers: CustomersService,
  ) {}

  public async getAll(): Promise<Order[]> {
    return await this.repo.find({ relations: ['items', 'customer'] });
  }

  public async getOneById(id: number, withRelations: boolean = true) {
    const relations = withRelations ? ['items', 'customer'] : [];

    return await this.repo.findOne({
      where: { id },
      relations,
    });
  }

  public async create(dto: OrderCreateDto): Promise<Order> {
    const items = await this.items.getAllByIds(dto.itemIds);
    const customer = await this.customers.getOneById(dto.customerId);

    // null check
    if (!items) throw new NotFoundException('Items not found');
    if (!customer) throw new NotFoundException('Customer not found');

    // save order
    const item = new Order();

    item.items = items;
    item.customer = customer;

    return await this.repo.save(item);
  }

  public async deleteOneById(id: number): Promise<void> {
    const item = await this.getOneById(id, false);

    await this.repo.delete(item);
  }
}
