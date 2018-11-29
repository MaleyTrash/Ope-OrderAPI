import { IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class OrderCreateDto {
  @ApiModelProperty({type: [Number]})
  @IsInt({ each: true })
  itemIds: number[];

  @ApiModelProperty()
  @IsInt()
  customerId: number;
}
