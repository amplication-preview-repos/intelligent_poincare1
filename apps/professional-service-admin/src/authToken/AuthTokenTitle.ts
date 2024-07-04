import { AuthToken as TAuthToken } from "../api/authToken/AuthToken";

export const AUTHTOKEN_TITLE_FIELD = "fkUser";

export const AuthTokenTitle = (record: TAuthToken): string => {
  return record.fkUser?.toString() || String(record.id);
};
