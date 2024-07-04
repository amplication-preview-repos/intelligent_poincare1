import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentStatusServiceBase } from "./base/paymentStatus.service.base";

@Injectable()
export class PaymentStatusService extends PaymentStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
