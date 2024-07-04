import { DayOfWeek as TDayOfWeek } from "../api/dayOfWeek/DayOfWeek";

export const DAYOFWEEK_TITLE_FIELD = "name";

export const DayOfWeekTitle = (record: TDayOfWeek): string => {
  return record.name?.toString() || String(record.id);
};
