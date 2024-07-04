import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProfessionalAvailabiltyExceptionsService } from "./professionalAvailabiltyExceptions.service";
import { ProfessionalAvailabiltyExceptionsControllerBase } from "./base/professionalAvailabiltyExceptions.controller.base";

@swagger.ApiTags("professionalAvailabiltyExceptions")
@common.Controller("professionalAvailabiltyExceptions")
export class ProfessionalAvailabiltyExceptionsController extends ProfessionalAvailabiltyExceptionsControllerBase {
  constructor(
    protected readonly service: ProfessionalAvailabiltyExceptionsService
  ) {
    super(service);
  }
}
