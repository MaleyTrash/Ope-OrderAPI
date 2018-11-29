import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerCreateDto } from './dto/customer-create.dto';
import { CustomerFactory } from './customer.factory';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly repo: Repository<Customer>,
  ) {}

  public async getAll(): Promise<Customer[]> {
    return await this.repo.find();
  }

  public async getOneById(id: number) {
    return await this.repo.findOne({ where: { id } });
  }

  public async create(dto: CustomerCreateDto): Promise<Customer> {
    const item = CustomerFactory.create(dto);

    return await this.repo.save(item);
  }
}
