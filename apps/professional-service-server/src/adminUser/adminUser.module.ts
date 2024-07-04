import { Module } from "@nestjs/common";
import { AdminUserModuleBase } from "./base/adminUser.module.base";
import { AdminUserService } from "./adminUser.service";
import { AdminUserController } from "./adminUser.controller";
import { AdminUserResolver } from "./adminUser.resolver";

@Module({
  imports: [AdminUserModuleBase],
  controllers: [AdminUserController],
  providers: [AdminUserService, AdminUserResolver],
  exports: [AdminUserService],
})
export class AdminUserModule {}
