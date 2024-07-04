import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceQuoteWhereInput = {
  fkServicePackage?: StringNullableFilter;
  fkStatus?: StringNullableFilter;
  fkUser?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
