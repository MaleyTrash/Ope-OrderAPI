import { IsString, MaxLength, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CustomerEditDto {
  @ApiModelProperty({required: false})
  @IsOptional()
  @IsString()
  @MaxLength(30)
  firstName?: string;

  @ApiModelProperty({required: false})
  @IsOptional()
  @IsString()
  @MaxLength(30)
  lastName?: string;
}
