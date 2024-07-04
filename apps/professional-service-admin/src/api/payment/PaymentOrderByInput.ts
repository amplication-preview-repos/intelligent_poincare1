import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  externalId?: SortOrder;
  fee?: SortOrder;
  fkAppointment?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
