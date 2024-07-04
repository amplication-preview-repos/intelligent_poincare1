export type SmsRequest = {
  createdAt: Date;
  dateCreated: Date | null;
  dateSent: Date | null;
  id: string;
  phone: string | null;
  sent: boolean | null;
  updatedAt: Date;
};
