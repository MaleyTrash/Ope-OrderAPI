import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Column,
} from 'typeorm';
import { Customer } from '../customers/customer.entity';
import { Item } from '../items/item.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  paid: boolean;

  @Column({ default: false })
  shipped: boolean;

  @ManyToMany(type => Item, item => item.orders)
  @JoinTable()
  items: Item[];

  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
}
