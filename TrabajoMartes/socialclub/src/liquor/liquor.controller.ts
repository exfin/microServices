import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { CreateOrderDto } from "./dtos/CreateOrder.dto";
import { emit } from "process";


@Controller('liquor')
    export class LiquorController{

        constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy){

        }
        @Post()
        createOrder(@Body() createOrderDto: CreateOrderDto){
            console.log(createOrderDto);
            return this.natsClient.send('createOrder', createOrderDto);
        }

        

    }
