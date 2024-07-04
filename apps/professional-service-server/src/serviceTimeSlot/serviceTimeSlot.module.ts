import { Module } from "@nestjs/common";
import { ServiceTimeSlotModuleBase } from "./base/serviceTimeSlot.module.base";
import { ServiceTimeSlotService } from "./serviceTimeSlot.service";
import { ServiceTimeSlotController } from "./serviceTimeSlot.controller";
import { ServiceTimeSlotResolver } from "./serviceTimeSlot.resolver";

@Module({
  imports: [ServiceTimeSlotModuleBase],
  controllers: [ServiceTimeSlotController],
  providers: [ServiceTimeSlotService, ServiceTimeSlotResolver],
  exports: [ServiceTimeSlotService],
})
export class ServiceTimeSlotModule {}
