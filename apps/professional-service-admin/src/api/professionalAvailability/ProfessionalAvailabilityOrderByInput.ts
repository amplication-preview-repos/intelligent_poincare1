import { SortOrder } from "../../util/SortOrder";

export type ProfessionalAvailabilityOrderByInput = {
  createdAt?: SortOrder;
  fkDayOfWeek?: SortOrder;
  fkProfessional?: SortOrder;
  fkTimeSlot?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
