export type ServiceQuote = {
  createdAt: Date;
  fkServicePackage: string | null;
  fkStatus: string | null;
  fkUser: string | null;
  id: string;
  price: number | null;
  updatedAt: Date;
};
