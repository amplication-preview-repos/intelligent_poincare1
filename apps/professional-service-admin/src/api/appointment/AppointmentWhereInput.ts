import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AppointmentWhereInput = {
  dateRequested?: DateTimeNullableFilter;
  dateService?: DateTimeNullableFilter;
  fkAddress?: StringNullableFilter;
  fkProfessional?: StringNullableFilter;
  fkServicePackage?: StringNullableFilter;
  fkStatus?: StringNullableFilter;
  fkTimeSlot?: StringNullableFilter;
  fkUser?: StringNullableFilter;
  id?: StringFilter;
  reviewed?: BooleanNullableFilter;
};
