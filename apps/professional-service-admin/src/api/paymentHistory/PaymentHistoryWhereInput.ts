import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentHistoryWhereInput = {
  fkPayment?: StringNullableFilter;
  fkPaymentStatus?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
