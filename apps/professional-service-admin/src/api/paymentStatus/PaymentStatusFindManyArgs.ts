import { PaymentStatusWhereInput } from "./PaymentStatusWhereInput";
import { PaymentStatusOrderByInput } from "./PaymentStatusOrderByInput";

export type PaymentStatusFindManyArgs = {
  where?: PaymentStatusWhereInput;
  orderBy?: Array<PaymentStatusOrderByInput>;
  skip?: number;
  take?: number;
};
