type TimestampedEntity<T> = T & {
  createdAt: Date;
  updatedAt: Date;
};

export type Company = TimestampedEntity<{
	id: string;
	name: string;
	description: string;
	banner: string;
}>

export type CompanySector = TimestampedEntity<{
	id: string;
	companyId: string;
	sectorId: string;
}>;

export type Sector = TimestampedEntity<{
	id: string;
	name: string;
}>;

export type CompanyWithSectorsKeys = Company & {
  sectors: CompanySector[];
};

export type CompanyWithSectors = Company & {
  sectors: Sector[];
};