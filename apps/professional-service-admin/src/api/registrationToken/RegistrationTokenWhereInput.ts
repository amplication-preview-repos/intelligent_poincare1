import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type RegistrationTokenWhereInput = {
  dateCreated?: DateTimeNullableFilter;
  dateExpires?: DateTimeNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  token?: StringNullableFilter;
  used?: BooleanNullableFilter;
};
