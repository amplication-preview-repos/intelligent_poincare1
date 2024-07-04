import { ServiceQuoteWhereInput } from "./ServiceQuoteWhereInput";
import { ServiceQuoteOrderByInput } from "./ServiceQuoteOrderByInput";

export type ServiceQuoteFindManyArgs = {
  where?: ServiceQuoteWhereInput;
  orderBy?: Array<ServiceQuoteOrderByInput>;
  skip?: number;
  take?: number;
};
