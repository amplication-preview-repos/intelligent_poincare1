import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  complement?: StringNullableFilter;
  fkUserId?: StringNullableFilter;
  id?: StringFilter;
  mainAddress?: BooleanNullableFilter;
  neighborhood?: StringNullableFilter;
  numberField?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
