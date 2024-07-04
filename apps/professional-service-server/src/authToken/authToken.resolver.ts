import * as graphql from "@nestjs/graphql";
import { AuthTokenResolverBase } from "./base/authToken.resolver.base";
import { AuthToken } from "./base/AuthToken";
import { AuthTokenService } from "./authToken.service";

@graphql.Resolver(() => AuthToken)
export class AuthTokenResolver extends AuthTokenResolverBase {
  constructor(protected readonly service: AuthTokenService) {
    super(service);
  }
}
