import { ServiceTimeSlotWhereInput } from "./ServiceTimeSlotWhereInput";
import { ServiceTimeSlotOrderByInput } from "./ServiceTimeSlotOrderByInput";

export type ServiceTimeSlotFindManyArgs = {
  where?: ServiceTimeSlotWhereInput;
  orderBy?: Array<ServiceTimeSlotOrderByInput>;
  skip?: number;
  take?: number;
};
