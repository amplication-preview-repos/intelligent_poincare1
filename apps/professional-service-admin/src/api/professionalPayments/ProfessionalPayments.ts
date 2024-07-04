export type ProfessionalPayments = {
  createdAt: Date;
  fkAppointment: string | null;
  fkProfessional: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
