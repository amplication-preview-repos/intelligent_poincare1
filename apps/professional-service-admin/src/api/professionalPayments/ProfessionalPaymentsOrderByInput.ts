import { SortOrder } from "../../util/SortOrder";

export type ProfessionalPaymentsOrderByInput = {
  createdAt?: SortOrder;
  fkAppointment?: SortOrder;
  fkProfessional?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
