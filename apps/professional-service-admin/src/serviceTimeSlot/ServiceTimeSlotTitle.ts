import { ServiceTimeSlot as TServiceTimeSlot } from "../api/serviceTimeSlot/ServiceTimeSlot";

export const SERVICETIMESLOT_TITLE_FIELD = "description";

export const ServiceTimeSlotTitle = (record: TServiceTimeSlot): string => {
  return record.description?.toString() || String(record.id);
};
