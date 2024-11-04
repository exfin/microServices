import { IsInt, IsString, IsDateString, IsNotEmpty, IsOptional, Min, MaxLength, IsPositive, IsEmail } from 'class-validator';

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    readonly OrderID: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    readonly LiquorType: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly Quantity: number;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly StockLevel: number;

    @IsDateString()
    @IsNotEmpty()
    readonly OrderDate: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    readonly SupplierContact?: string;

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly ReorderThreshold: number;

    @IsInt()
    @IsOptional()
    readonly EventServed: number;
}
