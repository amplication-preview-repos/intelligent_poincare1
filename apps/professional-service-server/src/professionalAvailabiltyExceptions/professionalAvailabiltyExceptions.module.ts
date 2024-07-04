import { Module } from "@nestjs/common";
import { ProfessionalAvailabiltyExceptionsModuleBase } from "./base/professionalAvailabiltyExceptions.module.base";
import { ProfessionalAvailabiltyExceptionsService } from "./professionalAvailabiltyExceptions.service";
import { ProfessionalAvailabiltyExceptionsController } from "./professionalAvailabiltyExceptions.controller";
import { ProfessionalAvailabiltyExceptionsResolver } from "./professionalAvailabiltyExceptions.resolver";

@Module({
  imports: [ProfessionalAvailabiltyExceptionsModuleBase],
  controllers: [ProfessionalAvailabiltyExceptionsController],
  providers: [
    ProfessionalAvailabiltyExceptionsService,
    ProfessionalAvailabiltyExceptionsResolver,
  ],
  exports: [ProfessionalAvailabiltyExceptionsService],
})
export class ProfessionalAvailabiltyExceptionsModule {}
