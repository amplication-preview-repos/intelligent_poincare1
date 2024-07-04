import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  cpf?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isProfessional?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  urlAvatar?: SortOrder;
  username?: SortOrder;
};
