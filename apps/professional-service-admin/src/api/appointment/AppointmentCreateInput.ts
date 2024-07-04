export type AppointmentCreateInput = {
  dateRequested?: Date | null;
  dateService?: Date | null;
  fkAddress?: string | null;
  fkProfessional?: string | null;
  fkServicePackage?: string | null;
  fkStatus?: string | null;
  fkTimeSlot?: string | null;
  fkUser?: string | null;
  reviewed?: boolean | null;
};
