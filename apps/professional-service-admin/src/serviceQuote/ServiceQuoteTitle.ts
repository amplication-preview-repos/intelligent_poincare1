import { ServiceQuote as TServiceQuote } from "../api/serviceQuote/ServiceQuote";

export const SERVICEQUOTE_TITLE_FIELD = "fkServicePackage";

export const ServiceQuoteTitle = (record: TServiceQuote): string => {
  return record.fkServicePackage?.toString() || String(record.id);
};
