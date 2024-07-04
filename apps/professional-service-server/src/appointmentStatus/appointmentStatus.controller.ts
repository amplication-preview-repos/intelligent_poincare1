import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentStatusService } from "./appointmentStatus.service";
import { AppointmentStatusControllerBase } from "./base/appointmentStatus.controller.base";

@swagger.ApiTags("appointmentStatuses")
@common.Controller("appointmentStatuses")
export class AppointmentStatusController extends AppointmentStatusControllerBase {
  constructor(protected readonly service: AppointmentStatusService) {
    super(service);
  }
}
