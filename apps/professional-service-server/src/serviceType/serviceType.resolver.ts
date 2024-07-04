import * as graphql from "@nestjs/graphql";
import { ServiceTypeResolverBase } from "./base/serviceType.resolver.base";
import { ServiceType } from "./base/ServiceType";
import { ServiceTypeService } from "./serviceType.service";

@graphql.Resolver(() => ServiceType)
export class ServiceTypeResolver extends ServiceTypeResolverBase {
  constructor(protected readonly service: ServiceTypeService) {
    super(service);
  }
}
