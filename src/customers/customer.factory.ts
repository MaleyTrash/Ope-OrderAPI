import { CustomerCreateDto } from './dto/customer-create.dto';
import { Customer } from './customer.entity';

export class CustomerFactory {
  static create(customerCreateDto: CustomerCreateDto) {
    const ret = new Customer();

    ret.firstName = customerCreateDto.firstName;
    ret.lastName = customerCreateDto.lastName;

    return ret;
  }
}
