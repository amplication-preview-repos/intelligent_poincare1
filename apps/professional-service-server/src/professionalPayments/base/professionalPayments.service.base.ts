/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProfessionalPayments as PrismaProfessionalPayments,
} from "@prisma/client";

export class ProfessionalPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProfessionalPaymentsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.professionalPayments.count(args);
  }

  async professionalPaymentsItems(
    args: Prisma.ProfessionalPaymentsFindManyArgs
  ): Promise<PrismaProfessionalPayments[]> {
    return this.prisma.professionalPayments.findMany(args);
  }
  async professionalPayments(
    args: Prisma.ProfessionalPaymentsFindUniqueArgs
  ): Promise<PrismaProfessionalPayments | null> {
    return this.prisma.professionalPayments.findUnique(args);
  }
  async createProfessionalPayments(
    args: Prisma.ProfessionalPaymentsCreateArgs
  ): Promise<PrismaProfessionalPayments> {
    return this.prisma.professionalPayments.create(args);
  }
  async updateProfessionalPayments(
    args: Prisma.ProfessionalPaymentsUpdateArgs
  ): Promise<PrismaProfessionalPayments> {
    return this.prisma.professionalPayments.update(args);
  }
  async deleteProfessionalPayments(
    args: Prisma.ProfessionalPaymentsDeleteArgs
  ): Promise<PrismaProfessionalPayments> {
    return this.prisma.professionalPayments.delete(args);
  }
}
