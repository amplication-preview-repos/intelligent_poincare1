import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type SmsRequestWhereInput = {
  dateCreated?: DateTimeNullableFilter;
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  sent?: BooleanNullableFilter;
};
