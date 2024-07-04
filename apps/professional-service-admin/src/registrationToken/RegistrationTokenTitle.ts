import { RegistrationToken as TRegistrationToken } from "../api/registrationToken/RegistrationToken";

export const REGISTRATIONTOKEN_TITLE_FIELD = "phone";

export const RegistrationTokenTitle = (record: TRegistrationToken): string => {
  return record.phone?.toString() || String(record.id);
};
