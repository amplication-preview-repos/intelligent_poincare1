import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "fkAddress";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.fkAddress?.toString() || String(record.id);
};
