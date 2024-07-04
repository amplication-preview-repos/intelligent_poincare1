import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceTypeServiceBase } from "./base/serviceType.service.base";

@Injectable()
export class ServiceTypeService extends ServiceTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
