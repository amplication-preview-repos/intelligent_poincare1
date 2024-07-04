import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfessionalAvailabiltyExceptionsWhereInput = {
  date?: DateTimeNullableFilter;
  fkProfessional?: StringNullableFilter;
  fkTimeSlot?: StringNullableFilter;
  id?: StringFilter;
};
