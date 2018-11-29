import { IsString, IsInt, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ItemCreateDto {
    @ApiModelProperty()
    @IsString()
    name: string;

    @ApiModelProperty()
    @IsInt()
    @Min(0)
    price: number;
}