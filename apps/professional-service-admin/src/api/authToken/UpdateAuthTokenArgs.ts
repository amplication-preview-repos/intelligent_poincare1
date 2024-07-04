import { AuthTokenWhereUniqueInput } from "./AuthTokenWhereUniqueInput";
import { AuthTokenUpdateInput } from "./AuthTokenUpdateInput";

export type UpdateAuthTokenArgs = {
  where: AuthTokenWhereUniqueInput;
  data: AuthTokenUpdateInput;
};
