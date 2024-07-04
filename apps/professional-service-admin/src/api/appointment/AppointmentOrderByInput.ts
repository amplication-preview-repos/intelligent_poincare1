import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  dateRequested?: SortOrder;
  dateService?: SortOrder;
  fkAddress?: SortOrder;
  fkProfessional?: SortOrder;
  fkServicePackage?: SortOrder;
  fkStatus?: SortOrder;
  fkTimeSlot?: SortOrder;
  fkUser?: SortOrder;
  id?: SortOrder;
  reviewed?: SortOrder;
  updatedAt?: SortOrder;
};
