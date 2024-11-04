import { IsInt, IsString, IsDateString, IsEmail, Min, MaxLength, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateBookingDto {
    @IsInt()
    @IsNotEmpty()
    EventID: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    EventName: string;

    @IsDateString()
    @IsNotEmpty()
    EventDate: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    GuestName: string;

    @IsEmail()
    @IsNotEmpty()
    GuestEmail: string;

    @IsInt()
    @Min(1)
    @IsNotEmpty()
    GuestCount: number;

    @IsString()
    @IsOptional()
    @MaxLength(200)
    SpecialRequests: string;
}
