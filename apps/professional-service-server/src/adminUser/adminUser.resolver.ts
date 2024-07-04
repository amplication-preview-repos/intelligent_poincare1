import * as graphql from "@nestjs/graphql";
import { AdminUserResolverBase } from "./base/adminUser.resolver.base";
import { AdminUser } from "./base/AdminUser";
import { AdminUserService } from "./adminUser.service";

@graphql.Resolver(() => AdminUser)
export class AdminUserResolver extends AdminUserResolverBase {
  constructor(protected readonly service: AdminUserService) {
    super(service);
  }
}
