import { IsString, IsInt, Min, IsNumber, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ItemEditDto {
  @ApiModelProperty({required: false})
  @IsOptional()
  @IsString()
  name?: string;

  @ApiModelProperty({required: false})
  @IsOptional()
  @IsInt()
  @Min(0)
  price?: number;
}
