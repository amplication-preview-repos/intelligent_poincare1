import * as graphql from "@nestjs/graphql";
import { ProfessionalAvailabilityResolverBase } from "./base/professionalAvailability.resolver.base";
import { ProfessionalAvailability } from "./base/ProfessionalAvailability";
import { ProfessionalAvailabilityService } from "./professionalAvailability.service";

@graphql.Resolver(() => ProfessionalAvailability)
export class ProfessionalAvailabilityResolver extends ProfessionalAvailabilityResolverBase {
  constructor(protected readonly service: ProfessionalAvailabilityService) {
    super(service);
  }
}
