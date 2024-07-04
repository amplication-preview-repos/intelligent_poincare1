import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceTimeSlotServiceBase } from "./base/serviceTimeSlot.service.base";

@Injectable()
export class ServiceTimeSlotService extends ServiceTimeSlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
