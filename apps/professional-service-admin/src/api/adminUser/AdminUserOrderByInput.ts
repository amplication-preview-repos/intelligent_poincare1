import { SortOrder } from "../../util/SortOrder";

export type AdminUserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  passwordService?: SortOrder;
  rolesBuilder?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
