import { ProfessionalPaymentsWhereInput } from "./ProfessionalPaymentsWhereInput";
import { ProfessionalPaymentsOrderByInput } from "./ProfessionalPaymentsOrderByInput";

export type ProfessionalPaymentsFindManyArgs = {
  where?: ProfessionalPaymentsWhereInput;
  orderBy?: Array<ProfessionalPaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
