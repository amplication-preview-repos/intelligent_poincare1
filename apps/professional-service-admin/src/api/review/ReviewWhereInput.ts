import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  description?: StringNullableFilter;
  fkAppointment?: StringNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
};
