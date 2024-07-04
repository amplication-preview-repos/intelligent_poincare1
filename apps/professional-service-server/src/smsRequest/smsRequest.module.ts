import { Module } from "@nestjs/common";
import { SmsRequestModuleBase } from "./base/smsRequest.module.base";
import { SmsRequestService } from "./smsRequest.service";
import { SmsRequestController } from "./smsRequest.controller";
import { SmsRequestResolver } from "./smsRequest.resolver";

@Module({
  imports: [SmsRequestModuleBase],
  controllers: [SmsRequestController],
  providers: [SmsRequestService, SmsRequestResolver],
  exports: [SmsRequestService],
})
export class SmsRequestModule {}
