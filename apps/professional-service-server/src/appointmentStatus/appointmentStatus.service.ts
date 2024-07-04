import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentStatusServiceBase } from "./base/appointmentStatus.service.base";

@Injectable()
export class AppointmentStatusService extends AppointmentStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
