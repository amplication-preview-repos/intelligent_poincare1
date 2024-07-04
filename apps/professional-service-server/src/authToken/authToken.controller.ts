import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthTokenService } from "./authToken.service";
import { AuthTokenControllerBase } from "./base/authToken.controller.base";

@swagger.ApiTags("authTokens")
@common.Controller("authTokens")
export class AuthTokenController extends AuthTokenControllerBase {
  constructor(protected readonly service: AuthTokenService) {
    super(service);
  }
}
