import { ServiceTypeWhereInput } from "./ServiceTypeWhereInput";
import { ServiceTypeOrderByInput } from "./ServiceTypeOrderByInput";

export type ServiceTypeFindManyArgs = {
  where?: ServiceTypeWhereInput;
  orderBy?: Array<ServiceTypeOrderByInput>;
  skip?: number;
  take?: number;
};
