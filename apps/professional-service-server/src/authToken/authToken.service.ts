import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthTokenServiceBase } from "./base/authToken.service.base";

@Injectable()
export class AuthTokenService extends AuthTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
