import { IsInt } from 'class-validator';

export class OrderCreateDto {
  @IsInt({ each: true })
  itemIds: number[];

  @IsInt()
  customerId: number;
}
