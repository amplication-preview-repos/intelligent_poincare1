import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  date?: DateTimeNullableFilter;
  externalId?: StringNullableFilter;
  fee?: FloatNullableFilter;
  fkAppointment?: StringNullableFilter;
  id?: StringFilter;
  value?: FloatNullableFilter;
};
