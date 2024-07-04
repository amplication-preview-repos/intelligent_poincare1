import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DayOfWeekService } from "./dayOfWeek.service";
import { DayOfWeekControllerBase } from "./base/dayOfWeek.controller.base";

@swagger.ApiTags("dayOfWeeks")
@common.Controller("dayOfWeeks")
export class DayOfWeekController extends DayOfWeekControllerBase {
  constructor(protected readonly service: DayOfWeekService) {
    super(service);
  }
}
