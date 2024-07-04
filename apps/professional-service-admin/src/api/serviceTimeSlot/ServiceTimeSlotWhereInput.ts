import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ServiceTimeSlotWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  timestampEnd?: DateTimeNullableFilter;
  timestampStart?: DateTimeNullableFilter;
};
