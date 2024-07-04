import * as graphql from "@nestjs/graphql";
import { ProfessionalPaymentsResolverBase } from "./base/professionalPayments.resolver.base";
import { ProfessionalPayments } from "./base/ProfessionalPayments";
import { ProfessionalPaymentsService } from "./professionalPayments.service";

@graphql.Resolver(() => ProfessionalPayments)
export class ProfessionalPaymentsResolver extends ProfessionalPaymentsResolverBase {
  constructor(protected readonly service: ProfessionalPaymentsService) {
    super(service);
  }
}
