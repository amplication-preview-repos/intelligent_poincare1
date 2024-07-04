import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminUserWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  passwordService?: StringNullableFilter;
  rolesBuilder?: StringNullableFilter;
  username?: StringNullableFilter;
};
