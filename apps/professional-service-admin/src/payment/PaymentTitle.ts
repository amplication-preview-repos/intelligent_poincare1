import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "externalId";

export const PaymentTitle = (record: TPayment): string => {
  return record.externalId?.toString() || String(record.id);
};
