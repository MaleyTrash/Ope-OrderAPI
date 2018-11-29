import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Customer } from 'customers/customer.entity';
import { Item } from 'items/item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Item, item => item.orders)
  @JoinTable()
  items: Item[];

  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
}
