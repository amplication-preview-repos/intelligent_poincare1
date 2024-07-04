import { Module } from "@nestjs/common";
import { ServiceTypeModuleBase } from "./base/serviceType.module.base";
import { ServiceTypeService } from "./serviceType.service";
import { ServiceTypeController } from "./serviceType.controller";
import { ServiceTypeResolver } from "./serviceType.resolver";

@Module({
  imports: [ServiceTypeModuleBase],
  controllers: [ServiceTypeController],
  providers: [ServiceTypeService, ServiceTypeResolver],
  exports: [ServiceTypeService],
})
export class ServiceTypeModule {}
