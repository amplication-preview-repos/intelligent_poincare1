import { SmsRequestWhereInput } from "./SmsRequestWhereInput";
import { SmsRequestOrderByInput } from "./SmsRequestOrderByInput";

export type SmsRequestFindManyArgs = {
  where?: SmsRequestWhereInput;
  orderBy?: Array<SmsRequestOrderByInput>;
  skip?: number;
  take?: number;
};
