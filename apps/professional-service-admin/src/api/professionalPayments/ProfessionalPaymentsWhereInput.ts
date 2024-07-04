import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProfessionalPaymentsWhereInput = {
  fkAppointment?: StringNullableFilter;
  fkProfessional?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
