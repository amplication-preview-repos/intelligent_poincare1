import { SortOrder } from "../../util/SortOrder";

export type AdminUserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
