import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminUserWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
