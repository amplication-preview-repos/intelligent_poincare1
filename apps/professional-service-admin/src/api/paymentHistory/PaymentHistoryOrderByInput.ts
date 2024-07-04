import { SortOrder } from "../../util/SortOrder";

export type PaymentHistoryOrderByInput = {
  createdAt?: SortOrder;
  fkPayment?: SortOrder;
  fkPaymentStatus?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
