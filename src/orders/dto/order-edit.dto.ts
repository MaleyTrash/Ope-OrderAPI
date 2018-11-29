import { IsInt, IsOptional, IsBoolean } from 'class-validator';

export class OrderEditDto {
  @IsOptional()
  @IsInt({ each: true })
  itemIds?: number[];

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsBoolean()
  paid?: boolean;

  @IsOptional()
  @IsBoolean()
  shipped?: boolean;
}
