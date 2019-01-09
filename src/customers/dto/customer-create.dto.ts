import { IsString, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CustomerCreateDto {
  @ApiModelProperty()
  @IsString()
  @MaxLength(30)
  firstName: string;

  @ApiModelProperty()
  @IsString()
  @MaxLength(30)
  lastName: string;

  @ApiModelProperty()
  @IsString()
  @MaxLength(30)
  password: string;
}
