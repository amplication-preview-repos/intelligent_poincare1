export type Review = {
  createdAt: Date;
  description: string | null;
  fkAppointment: string | null;
  id: string;
  score: number | null;
  updatedAt: Date;
};
