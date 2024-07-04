import { RegistrationTokenWhereInput } from "./RegistrationTokenWhereInput";
import { RegistrationTokenOrderByInput } from "./RegistrationTokenOrderByInput";

export type RegistrationTokenFindManyArgs = {
  where?: RegistrationTokenWhereInput;
  orderBy?: Array<RegistrationTokenOrderByInput>;
  skip?: number;
  take?: number;
};
