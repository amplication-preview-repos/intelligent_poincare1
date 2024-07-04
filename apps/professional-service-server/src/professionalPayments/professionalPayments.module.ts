import { Module } from "@nestjs/common";
import { ProfessionalPaymentsModuleBase } from "./base/professionalPayments.module.base";
import { ProfessionalPaymentsService } from "./professionalPayments.service";
import { ProfessionalPaymentsController } from "./professionalPayments.controller";
import { ProfessionalPaymentsResolver } from "./professionalPayments.resolver";

@Module({
  imports: [ProfessionalPaymentsModuleBase],
  controllers: [ProfessionalPaymentsController],
  providers: [ProfessionalPaymentsService, ProfessionalPaymentsResolver],
  exports: [ProfessionalPaymentsService],
})
export class ProfessionalPaymentsModule {}
