import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmsRequestServiceBase } from "./base/smsRequest.service.base";

@Injectable()
export class SmsRequestService extends SmsRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
