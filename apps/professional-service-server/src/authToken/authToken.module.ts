import { Module } from "@nestjs/common";
import { AuthTokenModuleBase } from "./base/authToken.module.base";
import { AuthTokenService } from "./authToken.service";
import { AuthTokenController } from "./authToken.controller";
import { AuthTokenResolver } from "./authToken.resolver";

@Module({
  imports: [AuthTokenModuleBase],
  controllers: [AuthTokenController],
  providers: [AuthTokenService, AuthTokenResolver],
  exports: [AuthTokenService],
})
export class AuthTokenModule {}
