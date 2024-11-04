import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateOrderDto } from "./dtos/CreateOrder.dto";

@Controller()
export class LiquorMicroserviceController{
   constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy){

   }
   @MessagePattern('createOrder')
   createOrder(@Payload() createOrderDto: CreateOrderDto){
        console.log(createOrderDto);
        this.natsClient.emit('orderCreated', createOrderDto);
        return {msg: 'Success'};
   }
   
}