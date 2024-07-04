import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProfessionalAvailabiltyExceptionsServiceBase } from "./base/professionalAvailabiltyExceptions.service.base";

@Injectable()
export class ProfessionalAvailabiltyExceptionsService extends ProfessionalAvailabiltyExceptionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
