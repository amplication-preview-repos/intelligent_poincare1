import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cpf?: string | null;
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  isProfessional?: boolean | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  phone?: string | null;
  roles?: InputJsonValue;
  urlAvatar?: string | null;
  username?: string;
};
