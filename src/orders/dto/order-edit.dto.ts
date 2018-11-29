import { IsInt, IsOptional, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class OrderEditDto {
  @ApiModelProperty({required: false, type: [Number]})
  @IsOptional()
  @IsInt({ each: true })
  itemIds?: number[];

  @ApiModelProperty({required: false})
  @IsOptional()
  @IsInt()
  customerId?: number;

  @ApiModelProperty({required: false})
  @IsOptional()
  @IsBoolean()
  paid?: boolean;

  @ApiModelProperty({required: false})
  @IsOptional()
  @IsBoolean()
  shipped?: boolean;
}
