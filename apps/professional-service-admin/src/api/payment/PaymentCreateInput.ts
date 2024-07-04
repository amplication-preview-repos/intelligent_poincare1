export type PaymentCreateInput = {
  date?: Date | null;
  externalId?: string | null;
  fee?: number | null;
  fkAppointment?: string | null;
  value?: number | null;
};
