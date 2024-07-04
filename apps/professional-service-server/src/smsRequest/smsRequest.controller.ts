import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SmsRequestService } from "./smsRequest.service";
import { SmsRequestControllerBase } from "./base/smsRequest.controller.base";

@swagger.ApiTags("smsRequests")
@common.Controller("smsRequests")
export class SmsRequestController extends SmsRequestControllerBase {
  constructor(protected readonly service: SmsRequestService) {
    super(service);
  }
}
