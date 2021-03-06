import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomerCreateDto } from './dto/customer-create.dto';
import { CustomerFactory } from './customer.factory';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEditDto } from './dto/customer-edit.dto';
import { CustomerLoginDto } from './dto/customer-login.dto';

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
    const customer = await this.repo.findOne({ where: { id } });

    if (!customer) throw new NotFoundException('Customer not found');

    return customer;
  }

  public async login(dto: CustomerLoginDto): Promise<Customer> {
    const item = await this.repo.findOne({ where: dto });

    if (!item) throw new UnauthorizedException('Invalid login');

    return item;
  }

  public async updateOneById(id: number, dto: CustomerEditDto) {
    const item = await this.getOneById(id);

    if (!item) throw new NotFoundException();

    item.firstName = dto.firstName || item.firstName;
    item.lastName = dto.lastName || item.lastName;
    item.password = dto.password || item.password;

    return await this.repo.save(item);
  }

  public async create(dto: CustomerCreateDto): Promise<Customer> {
    const item = CustomerFactory.create(dto);

    return await this.repo.save(item);
  }

  public async deleteOneById(id: number): Promise<void> {
    const item = await this.getOneById(id);

    await this.repo.delete(item);
  }
}
