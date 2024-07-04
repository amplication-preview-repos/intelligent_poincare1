import * as graphql from "@nestjs/graphql";
import { ProfessionalAvailabiltyExceptionsResolverBase } from "./base/professionalAvailabiltyExceptions.resolver.base";
import { ProfessionalAvailabiltyExceptions } from "./base/ProfessionalAvailabiltyExceptions";
import { ProfessionalAvailabiltyExceptionsService } from "./professionalAvailabiltyExceptions.service";

@graphql.Resolver(() => ProfessionalAvailabiltyExceptions)
export class ProfessionalAvailabiltyExceptionsResolver extends ProfessionalAvailabiltyExceptionsResolverBase {
  constructor(
    protected readonly service: ProfessionalAvailabiltyExceptionsService
  ) {
    super(service);
  }
}
