import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServicePackageWhereInput = {
  description?: StringNullableFilter;
  feeFixed?: FloatNullableFilter;
  feePercentage?: FloatNullableFilter;
  fkServiceType?: StringNullableFilter;
  hidden?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
