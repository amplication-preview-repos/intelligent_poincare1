import { Module } from "@nestjs/common";
import { AppointmentStatusModuleBase } from "./base/appointmentStatus.module.base";
import { AppointmentStatusService } from "./appointmentStatus.service";
import { AppointmentStatusController } from "./appointmentStatus.controller";
import { AppointmentStatusResolver } from "./appointmentStatus.resolver";

@Module({
  imports: [AppointmentStatusModuleBase],
  controllers: [AppointmentStatusController],
  providers: [AppointmentStatusService, AppointmentStatusResolver],
  exports: [AppointmentStatusService],
})
export class AppointmentStatusModule {}
