import { AppointmentStatus as TAppointmentStatus } from "../api/appointmentStatus/AppointmentStatus";

export const APPOINTMENTSTATUS_TITLE_FIELD = "name";

export const AppointmentStatusTitle = (record: TAppointmentStatus): string => {
  return record.name?.toString() || String(record.id);
};
