import { Module } from "@nestjs/common";
import { ProfessionalAvailabilityModuleBase } from "./base/professionalAvailability.module.base";
import { ProfessionalAvailabilityService } from "./professionalAvailability.service";
import { ProfessionalAvailabilityController } from "./professionalAvailability.controller";
import { ProfessionalAvailabilityResolver } from "./professionalAvailability.resolver";

@Module({
  imports: [ProfessionalAvailabilityModuleBase],
  controllers: [ProfessionalAvailabilityController],
  providers: [
    ProfessionalAvailabilityService,
    ProfessionalAvailabilityResolver,
  ],
  exports: [ProfessionalAvailabilityService],
})
export class ProfessionalAvailabilityModule {}
