import { PaymentHistory as TPaymentHistory } from "../api/paymentHistory/PaymentHistory";

export const PAYMENTHISTORY_TITLE_FIELD = "fkPayment";

export const PaymentHistoryTitle = (record: TPaymentHistory): string => {
  return record.fkPayment?.toString() || String(record.id);
};
