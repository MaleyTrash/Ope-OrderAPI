import { IsString, MaxLength, IsOptional } from 'class-validator';

export class CustomerEditDto {
  @IsOptional()
  @IsString()
  @MaxLength(30)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  lastName?: string;
}
