import { ProfessionalPayments as TProfessionalPayments } from "../api/professionalPayments/ProfessionalPayments";

export const PROFESSIONALPAYMENTS_TITLE_FIELD = "fkAppointment";

export const ProfessionalPaymentsTitle = (
  record: TProfessionalPayments
): string => {
  return record.fkAppointment?.toString() || String(record.id);
};
