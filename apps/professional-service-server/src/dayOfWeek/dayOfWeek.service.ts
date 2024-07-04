import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DayOfWeekServiceBase } from "./base/dayOfWeek.service.base";

@Injectable()
export class DayOfWeekService extends DayOfWeekServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
