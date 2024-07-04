export type AdminUser = {
  createdAt: Date;
  id: string;
  password: string | null;
  passwordService: string | null;
  rolesBuilder: string | null;
  updatedAt: Date;
  username: string | null;
};
