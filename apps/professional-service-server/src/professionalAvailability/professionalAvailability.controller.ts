import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfessionalAvailabilityService } from "./professionalAvailability.service";
import { ProfessionalAvailabilityControllerBase } from "./base/professionalAvailability.controller.base";

@swagger.ApiTags("professionalAvailabilities")
@common.Controller("professionalAvailabilities")
export class ProfessionalAvailabilityController extends ProfessionalAvailabilityControllerBase {
  constructor(protected readonly service: ProfessionalAvailabilityService) {
    super(service);
  }
}
