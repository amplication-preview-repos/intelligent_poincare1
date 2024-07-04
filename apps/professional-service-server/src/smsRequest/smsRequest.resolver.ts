import * as graphql from "@nestjs/graphql";
import { SmsRequestResolverBase } from "./base/smsRequest.resolver.base";
import { SmsRequest } from "./base/SmsRequest";
import { SmsRequestService } from "./smsRequest.service";

@graphql.Resolver(() => SmsRequest)
export class SmsRequestResolver extends SmsRequestResolverBase {
  constructor(protected readonly service: SmsRequestService) {
    super(service);
  }
}
