export type PaymentHistory = {
  createdAt: Date;
  fkPayment: string | null;
  fkPaymentStatus: string | null;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
