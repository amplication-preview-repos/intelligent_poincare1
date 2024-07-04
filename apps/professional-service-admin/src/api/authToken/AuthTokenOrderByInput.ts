import { SortOrder } from "../../util/SortOrder";

export type AuthTokenOrderByInput = {
  createdAt?: SortOrder;
  fkUser?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
