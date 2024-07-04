import { ServiceType as TServiceType } from "../api/serviceType/ServiceType";

export const SERVICETYPE_TITLE_FIELD = "name";

export const ServiceTypeTitle = (record: TServiceType): string => {
  return record.name?.toString() || String(record.id);
};
