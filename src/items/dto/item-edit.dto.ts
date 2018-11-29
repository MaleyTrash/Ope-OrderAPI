import { IsString, IsInt, Min, IsNumber, IsOptional } from 'class-validator';

export class ItemEditDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  price?: number;
}
