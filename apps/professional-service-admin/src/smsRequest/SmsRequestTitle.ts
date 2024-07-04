import { SmsRequest as TSmsRequest } from "../api/smsRequest/SmsRequest";

export const SMSREQUEST_TITLE_FIELD = "phone";

export const SmsRequestTitle = (record: TSmsRequest): string => {
  return record.phone?.toString() || String(record.id);
};
