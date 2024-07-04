import { SortOrder } from "../../util/SortOrder";

export type ServicePackageOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  feeFixed?: SortOrder;
  feePercentage?: SortOrder;
  fkServiceType?: SortOrder;
  hidden?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
