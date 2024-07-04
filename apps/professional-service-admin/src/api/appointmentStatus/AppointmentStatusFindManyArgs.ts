import { AppointmentStatusWhereInput } from "./AppointmentStatusWhereInput";
import { AppointmentStatusOrderByInput } from "./AppointmentStatusOrderByInput";

export type AppointmentStatusFindManyArgs = {
  where?: AppointmentStatusWhereInput;
  orderBy?: Array<AppointmentStatusOrderByInput>;
  skip?: number;
  take?: number;
};
