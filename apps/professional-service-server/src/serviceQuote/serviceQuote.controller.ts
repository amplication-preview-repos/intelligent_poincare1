import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceQuoteService } from "./serviceQuote.service";
import { ServiceQuoteControllerBase } from "./base/serviceQuote.controller.base";

@swagger.ApiTags("serviceQuotes")
@common.Controller("serviceQuotes")
export class ServiceQuoteController extends ServiceQuoteControllerBase {
  constructor(protected readonly service: ServiceQuoteService) {
    super(service);
  }
}
