import { SortOrder } from "../../util/SortOrder";

export type ServiceTimeSlotOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  timestampEnd?: SortOrder;
  timestampStart?: SortOrder;
  updatedAt?: SortOrder;
};
