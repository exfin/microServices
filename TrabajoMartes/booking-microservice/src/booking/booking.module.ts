import { Module } from "@nestjs/common";
import { BookingMicroserviceController } from "./booking.controller";

@Module({
    imports: [],
    controllers: [BookingMicroserviceController],
    providers: []
})
export class BookingModule{
    
}