import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateBookingDto } from "./dtos/CreateBooking.dto";

@Controller('booking')
    export class BookingController{

        constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy){

        }

        @Post()
        createBooking(@Body() createBookingDto: CreateBookingDto) {
            console.log(createBookingDto);
            return this.natsClient.send({cmd: 'createBooking'}, createBookingDto);
        }

    }
