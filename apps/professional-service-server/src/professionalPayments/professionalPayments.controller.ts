import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfessionalPaymentsService } from "./professionalPayments.service";
import { ProfessionalPaymentsControllerBase } from "./base/professionalPayments.controller.base";

@swagger.ApiTags("professionalPayments")
@common.Controller("professionalPayments")
export class ProfessionalPaymentsController extends ProfessionalPaymentsControllerBase {
  constructor(protected readonly service: ProfessionalPaymentsService) {
    super(service);
  }
}
