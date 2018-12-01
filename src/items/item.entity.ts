import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Customer } from '../customers/customer.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  price: number;

  @ManyToMany(type => Customer, customer => customer.orders)
  orders: Customer;
}
