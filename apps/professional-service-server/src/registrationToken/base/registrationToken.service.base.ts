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
  RegistrationToken as PrismaRegistrationToken,
} from "@prisma/client";

export class RegistrationTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RegistrationTokenCountArgs, "select">
  ): Promise<number> {
    return this.prisma.registrationToken.count(args);
  }

  async registrationTokens(
    args: Prisma.RegistrationTokenFindManyArgs
  ): Promise<PrismaRegistrationToken[]> {
    return this.prisma.registrationToken.findMany(args);
  }
  async registrationToken(
    args: Prisma.RegistrationTokenFindUniqueArgs
  ): Promise<PrismaRegistrationToken | null> {
    return this.prisma.registrationToken.findUnique(args);
  }
  async createRegistrationToken(
    args: Prisma.RegistrationTokenCreateArgs
  ): Promise<PrismaRegistrationToken> {
    return this.prisma.registrationToken.create(args);
  }
  async updateRegistrationToken(
    args: Prisma.RegistrationTokenUpdateArgs
  ): Promise<PrismaRegistrationToken> {
    return this.prisma.registrationToken.update(args);
  }
  async deleteRegistrationToken(
    args: Prisma.RegistrationTokenDeleteArgs
  ): Promise<PrismaRegistrationToken> {
    return this.prisma.registrationToken.delete(args);
  }
}
