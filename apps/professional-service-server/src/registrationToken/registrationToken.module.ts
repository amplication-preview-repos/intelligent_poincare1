import { Module } from "@nestjs/common";
import { RegistrationTokenModuleBase } from "./base/registrationToken.module.base";
import { RegistrationTokenService } from "./registrationToken.service";
import { RegistrationTokenController } from "./registrationToken.controller";
import { RegistrationTokenResolver } from "./registrationToken.resolver";

@Module({
  imports: [RegistrationTokenModuleBase],
  controllers: [RegistrationTokenController],
  providers: [RegistrationTokenService, RegistrationTokenResolver],
  exports: [RegistrationTokenService],
})
export class RegistrationTokenModule {}
