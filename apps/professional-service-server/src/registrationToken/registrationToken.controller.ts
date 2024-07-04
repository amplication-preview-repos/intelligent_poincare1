import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RegistrationTokenService } from "./registrationToken.service";
import { RegistrationTokenControllerBase } from "./base/registrationToken.controller.base";

@swagger.ApiTags("registrationTokens")
@common.Controller("registrationTokens")
export class RegistrationTokenController extends RegistrationTokenControllerBase {
  constructor(protected readonly service: RegistrationTokenService) {
    super(service);
  }
}
