import { SortOrder } from "../../util/SortOrder";

export type RegistrationTokenOrderByInput = {
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  dateExpires?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  used?: SortOrder;
};
