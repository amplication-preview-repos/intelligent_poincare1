import { JsonValue } from "type-fest";

export type User = {
  cpf: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  isProfessional: boolean | null;
  lastName: string | null;
  name: string | null;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  urlAvatar: string | null;
  username: string;
};
