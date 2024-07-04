export type ServicePackage = {
  createdAt: Date;
  description: string | null;
  feeFixed: number | null;
  feePercentage: number | null;
  fkServiceType: string | null;
  hidden: boolean | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
