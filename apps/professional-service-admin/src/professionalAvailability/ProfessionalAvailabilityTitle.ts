import { ProfessionalAvailability as TProfessionalAvailability } from "../api/professionalAvailability/ProfessionalAvailability";

export const PROFESSIONALAVAILABILITY_TITLE_FIELD = "fkDayOfWeek";

export const ProfessionalAvailabilityTitle = (
  record: TProfessionalAvailability
): string => {
  return record.fkDayOfWeek?.toString() || String(record.id);
};
