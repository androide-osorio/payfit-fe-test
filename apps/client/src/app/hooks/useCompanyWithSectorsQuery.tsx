import { useQuery } from '@tanstack/react-query';
import { type components } from '@template/sdk';
import { getCompanies, getSectors } from '../shared/http';
import { type CompanyWithSectors, type Sector, type CompanyWithSectorsKeys } from '../types';

type Params = components['schemas']['Schema']['findCompaniesQuerySchema'];

const extractSectorIds = (companies: CompanyWithSectorsKeys[]) => {
	if (!companies) return undefined;
	return companies.flatMap((company) =>
		company.sectors.map((sector) => sector.sectorId)
	);
}

const injectSectors = (companies: CompanyWithSectorsKeys[], sectors: Sector[]): CompanyWithSectors[] => {
	return companies.map((company) => {
		const companySectors = company.sectors
			.map((sector) =>
				sectors.find((s) => s.id === sector.sectorId)
			)
			.filter(Boolean);

		return {
			...company,
			sectors: companySectors,
		} as CompanyWithSectors;
	});
};

export const useCompanyWithSectorsQuery = (options: Params = {}) => {
	const {
    isLoading: companiesLoading,
    error: companiesError,
    data: companies = [],
  } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { total, results } = await getCompanies();
      return results as CompanyWithSectorsKeys[];
    },
  });

  const sectorIds = extractSectorIds(companies);

  const {
    isLoading: sectorsLoading,
    error: sectorsError,
    data: sectors = [],
  } = useQuery({
    queryKey: ['sectors', sectorIds],
    queryFn: async () => {
      const { sectors } = await getSectors();
      return sectors;
    },
    enabled: Boolean(sectorIds),
  });

  const companiesWithSectors = injectSectors(companies, sectors);

	return {
		isLoading: companiesLoading || sectorsLoading,
		error: companiesError || sectorsError,
		data: companiesWithSectors,
	};
}