import { Module, Controller } from "@nestjs/common"

import { NatsClientModule } from "src/nats-client/nats-client.module";
import { LiquorController } from "./liquor.controller";

@Module({
    imports:[NatsClientModule],
    controllers: [LiquorController],
    providers: []
})

export class LiquorModule {}