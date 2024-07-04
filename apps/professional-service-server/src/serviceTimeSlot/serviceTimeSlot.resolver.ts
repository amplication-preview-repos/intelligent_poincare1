import * as graphql from "@nestjs/graphql";
import { ServiceTimeSlotResolverBase } from "./base/serviceTimeSlot.resolver.base";
import { ServiceTimeSlot } from "./base/ServiceTimeSlot";
import { ServiceTimeSlotService } from "./serviceTimeSlot.service";

@graphql.Resolver(() => ServiceTimeSlot)
export class ServiceTimeSlotResolver extends ServiceTimeSlotResolverBase {
  constructor(protected readonly service: ServiceTimeSlotService) {
    super(service);
  }
}
