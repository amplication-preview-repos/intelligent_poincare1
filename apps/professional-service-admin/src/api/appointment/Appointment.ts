export type Appointment = {
  createdAt: Date;
  dateRequested: Date | null;
  dateService: Date | null;
  fkAddress: string | null;
  fkProfessional: string | null;
  fkServicePackage: string | null;
  fkStatus: string | null;
  fkTimeSlot: string | null;
  fkUser: string | null;
  id: string;
  reviewed: boolean | null;
  updatedAt: Date;
};
