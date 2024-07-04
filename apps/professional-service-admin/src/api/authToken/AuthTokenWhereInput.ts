import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthTokenWhereInput = {
  fkUser?: StringNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
};
