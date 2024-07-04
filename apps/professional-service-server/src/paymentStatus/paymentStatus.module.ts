import { Module } from "@nestjs/common";
import { PaymentStatusModuleBase } from "./base/paymentStatus.module.base";
import { PaymentStatusService } from "./paymentStatus.service";
import { PaymentStatusController } from "./paymentStatus.controller";
import { PaymentStatusResolver } from "./paymentStatus.resolver";

@Module({
  imports: [PaymentStatusModuleBase],
  controllers: [PaymentStatusController],
  providers: [PaymentStatusService, PaymentStatusResolver],
  exports: [PaymentStatusService],
})
export class PaymentStatusModule {}
