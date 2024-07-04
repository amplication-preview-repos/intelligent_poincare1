import * as graphql from "@nestjs/graphql";
import { RegistrationTokenResolverBase } from "./base/registrationToken.resolver.base";
import { RegistrationToken } from "./base/RegistrationToken";
import { RegistrationTokenService } from "./registrationToken.service";

@graphql.Resolver(() => RegistrationToken)
export class RegistrationTokenResolver extends RegistrationTokenResolverBase {
  constructor(protected readonly service: RegistrationTokenService) {
    super(service);
  }
}
