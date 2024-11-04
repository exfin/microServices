import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateBookingDto } from "./dtos/CreateBooking.dto";

@Controller()
export class BookingMicroserviceController{

    @MessagePattern({cmd: 'createBooking'})
    createBooking(@Payload() data: CreateBookingDto ){
        console.log(data);
        return {msg: 'Success'};
    }

    @EventPattern('orderCreated')
    orderCreated(@Payload() data: any){
        console.log(data);
    }

}