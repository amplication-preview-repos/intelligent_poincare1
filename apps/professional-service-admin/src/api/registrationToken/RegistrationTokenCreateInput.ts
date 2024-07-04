export type RegistrationTokenCreateInput = {
  dateCreated?: Date | null;
  dateExpires?: Date | null;
  phone?: string | null;
  token?: string | null;
  used?: boolean | null;
};
