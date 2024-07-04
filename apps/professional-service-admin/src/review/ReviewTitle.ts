import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "fkAppointment";

export const ReviewTitle = (record: TReview): string => {
  return record.fkAppointment?.toString() || String(record.id);
};
