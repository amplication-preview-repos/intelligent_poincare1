export type RegistrationToken = {
  createdAt: Date;
  dateCreated: Date | null;
  dateExpires: Date | null;
  id: string;
  phone: string | null;
  token: string | null;
  updatedAt: Date;
  used: boolean | null;
};
