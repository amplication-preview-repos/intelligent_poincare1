import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RegistrationTokenServiceBase } from "./base/registrationToken.service.base";

@Injectable()
export class RegistrationTokenService extends RegistrationTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
