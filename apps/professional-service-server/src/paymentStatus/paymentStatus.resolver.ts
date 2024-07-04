import * as graphql from "@nestjs/graphql";
import { PaymentStatusResolverBase } from "./base/paymentStatus.resolver.base";
import { PaymentStatus } from "./base/PaymentStatus";
import { PaymentStatusService } from "./paymentStatus.service";

@graphql.Resolver(() => PaymentStatus)
export class PaymentStatusResolver extends PaymentStatusResolverBase {
  constructor(protected readonly service: PaymentStatusService) {
    super(service);
  }
}
