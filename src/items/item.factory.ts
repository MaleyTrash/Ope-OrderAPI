import { ItemCreateDto } from './dto/item-create.dto';
import { Item } from './item.entity';

export class ItemFactory {
  static create(itemCreateDto: ItemCreateDto): Item {
    const ret = new Item();

    ret.name = itemCreateDto.name;
    ret.price = itemCreateDto.price;

    return ret;
  }
}
