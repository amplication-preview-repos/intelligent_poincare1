import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceTimeSlotService } from "./serviceTimeSlot.service";
import { ServiceTimeSlotControllerBase } from "./base/serviceTimeSlot.controller.base";

@swagger.ApiTags("serviceTimeSlots")
@common.Controller("serviceTimeSlots")
export class ServiceTimeSlotController extends ServiceTimeSlotControllerBase {
  constructor(protected readonly service: ServiceTimeSlotService) {
    super(service);
  }
}
