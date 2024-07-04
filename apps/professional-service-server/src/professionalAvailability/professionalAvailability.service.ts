import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessionalAvailabilityServiceBase } from "./base/professionalAvailability.service.base";

@Injectable()
export class ProfessionalAvailabilityService extends ProfessionalAvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
