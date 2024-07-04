export type Payment = {
  createdAt: Date;
  date: Date | null;
  externalId: string | null;
  fee: number | null;
  fkAppointment: string | null;
  id: string;
  updatedAt: Date;
  value: number | null;
};
