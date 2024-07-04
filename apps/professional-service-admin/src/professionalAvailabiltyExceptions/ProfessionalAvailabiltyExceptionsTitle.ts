import { ProfessionalAvailabiltyExceptions as TProfessionalAvailabiltyExceptions } from "../api/professionalAvailabiltyExceptions/ProfessionalAvailabiltyExceptions";

export const PROFESSIONALAVAILABILTYEXCEPTIONS_TITLE_FIELD = "fkProfessional";

export const ProfessionalAvailabiltyExceptionsTitle = (
  record: TProfessionalAvailabiltyExceptions
): string => {
  return record.fkProfessional?.toString() || String(record.id);
};
