import { Module } from "@nestjs/common";
import { LiquorMicroserviceController } from "./liquor.controller";
import { NatsClientModule } from "src/nats-client/nats-client.module";

@Module({
    imports: [NatsClientModule],
    controllers: [LiquorMicroserviceController],
    providers: []
})

export class LiquorModule{

}