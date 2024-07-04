import { AuthTokenWhereInput } from "./AuthTokenWhereInput";
import { AuthTokenOrderByInput } from "./AuthTokenOrderByInput";

export type AuthTokenFindManyArgs = {
  where?: AuthTokenWhereInput;
  orderBy?: Array<AuthTokenOrderByInput>;
  skip?: number;
  take?: number;
};
