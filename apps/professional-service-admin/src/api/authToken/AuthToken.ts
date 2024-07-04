export type AuthToken = {
  createdAt: Date;
  fkUser: string | null;
  id: string;
  token: string | null;
  updatedAt: Date;
};
