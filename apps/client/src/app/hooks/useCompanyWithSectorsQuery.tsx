import { useQuery } from '@tanstack/react-query';
import { type components } from '@template/sdk';

import { getCompanies, getSectors } from '../shared/http';
import {
  type CompanyWithSectors,
  type Sector,
  type CompanyWithSectorsKeys,
} from '../types';

type Params = components['schemas']['Schema']['findCompaniesQuerySchema'];

/**
 * Extracts an array of sector IDs from an array of companies with sectors.
 * @param companies An array of companies with sectors.
 * @returns An array of sector IDs.
 */
const extractSectorIds = (companies: CompanyWithSectorsKeys[]) => {
  if (!companies) return undefined;
  return companies.flatMap((company) =>
    company.sectors.map((sector) => sector.sectorId),
  );
};

/**
 * Injects sector information into an array of companies with sectors.
 * @param companies An array of companies with sectors.
 * @param sectors An array of sectors.
 * @returns An array of companies with sectors and their corresponding sector information.
 */
const injectSectors = (
  companies: CompanyWithSectorsKeys[],
  sectors: Sector[],
): CompanyWithSectors[] => {
  return companies.map((company) => {
    const companySectors = company.sectors
      .map((sector) => sectors.find((s) => s.id === sector.sectorId))
      .filter(Boolean);

    return {
      ...company,
      sectors: companySectors,
    } as CompanyWithSectors;
  });
};

/**
 * A custom hook that fetches companies with their corresponding sectors.
 * @param options An object containing query parameters.
 * @returns An object containing the loading state, error, and data of the companies with their corresponding sectors.
 */
export const useCompanyWithSectorsQuery = (options: Params = {}) => {
  const {
    isLoading: companiesLoading,
    error: companiesError,
    data: companies = [],
  } = useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { results } = await getCompanies(options);
      return results satisfies CompanyWithSectorsKeys[];
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
};
