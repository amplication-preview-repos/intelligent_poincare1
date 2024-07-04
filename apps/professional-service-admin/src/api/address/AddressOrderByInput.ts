import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  complement?: SortOrder;
  createdAt?: SortOrder;
  fkUserId?: SortOrder;
  id?: SortOrder;
  mainAddress?: SortOrder;
  neighborhood?: SortOrder;
  numberField?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
