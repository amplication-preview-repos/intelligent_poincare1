import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceTypeService } from "./serviceType.service";
import { ServiceTypeControllerBase } from "./base/serviceType.controller.base";

@swagger.ApiTags("serviceTypes")
@common.Controller("serviceTypes")
export class ServiceTypeController extends ServiceTypeControllerBase {
  constructor(protected readonly service: ServiceTypeService) {
    super(service);
  }
}
