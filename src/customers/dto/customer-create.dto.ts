import { IsString, MaxLength } from 'class-validator';

export class CustomerCreateDto {
  @IsString()
  @MaxLength(30)
  firstName: string;

  @IsString()
  @MaxLength(30)
  lastName: string;
}
