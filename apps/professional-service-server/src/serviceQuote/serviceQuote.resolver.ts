import * as graphql from "@nestjs/graphql";
import { ServiceQuoteResolverBase } from "./base/serviceQuote.resolver.base";
import { ServiceQuote } from "./base/ServiceQuote";
import { ServiceQuoteService } from "./serviceQuote.service";

@graphql.Resolver(() => ServiceQuote)
export class ServiceQuoteResolver extends ServiceQuoteResolverBase {
  constructor(protected readonly service: ServiceQuoteService) {
    super(service);
  }
}
