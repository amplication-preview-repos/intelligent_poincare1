import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessionalPaymentsServiceBase } from "./base/professionalPayments.service.base";

@Injectable()
export class ProfessionalPaymentsService extends ProfessionalPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
