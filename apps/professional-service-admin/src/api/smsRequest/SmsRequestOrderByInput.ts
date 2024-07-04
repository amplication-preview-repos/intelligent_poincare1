import { SortOrder } from "../../util/SortOrder";

export type SmsRequestOrderByInput = {
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  dateSent?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  sent?: SortOrder;
  updatedAt?: SortOrder;
};
