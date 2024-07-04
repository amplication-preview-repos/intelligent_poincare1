import { PaymentStatus as TPaymentStatus } from "../api/paymentStatus/PaymentStatus";

export const PAYMENTSTATUS_TITLE_FIELD = "name";

export const PaymentStatusTitle = (record: TPaymentStatus): string => {
  return record.name?.toString() || String(record.id);
};
