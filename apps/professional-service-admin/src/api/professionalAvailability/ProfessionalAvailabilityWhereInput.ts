import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfessionalAvailabilityWhereInput = {
  fkDayOfWeek?: StringNullableFilter;
  fkProfessional?: StringNullableFilter;
  fkTimeSlot?: StringNullableFilter;
  id?: StringFilter;
};
