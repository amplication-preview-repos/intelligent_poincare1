import { SortOrder } from "../../util/SortOrder";

export type ServiceQuoteOrderByInput = {
  createdAt?: SortOrder;
  fkServicePackage?: SortOrder;
  fkStatus?: SortOrder;
  fkUser?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
