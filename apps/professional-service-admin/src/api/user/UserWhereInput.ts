import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  cpf?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isProfessional?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  urlAvatar?: StringNullableFilter;
  username?: StringFilter;
};
