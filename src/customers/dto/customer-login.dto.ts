import { IsString, MaxLength, IsOptional } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CustomerLoginDto {
  @ApiModelProperty()
  @IsString()
  @MaxLength(30)
  firstName?: string;

  @ApiModelProperty()
  @IsString()
  @MaxLength(30)
  password?: string;
}
