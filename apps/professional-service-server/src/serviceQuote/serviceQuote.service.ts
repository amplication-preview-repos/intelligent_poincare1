import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceQuoteServiceBase } from "./base/serviceQuote.service.base";

@Injectable()
export class ServiceQuoteService extends ServiceQuoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
