import { Module } from "@nestjs/common";
import { ServiceQuoteModuleBase } from "./base/serviceQuote.module.base";
import { ServiceQuoteService } from "./serviceQuote.service";
import { ServiceQuoteController } from "./serviceQuote.controller";
import { ServiceQuoteResolver } from "./serviceQuote.resolver";

@Module({
  imports: [ServiceQuoteModuleBase],
  controllers: [ServiceQuoteController],
  providers: [ServiceQuoteService, ServiceQuoteResolver],
  exports: [ServiceQuoteService],
})
export class ServiceQuoteModule {}
