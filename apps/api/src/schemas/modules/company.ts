import { z } from 'zod'
import { CompanyModel, CompanySectorModel } from '../generated'
/**
 * Create
 */
export const createCompanyInputSchema = CompanyModel.pick({
  name: true,
  description: true,
  banner: true,
}).extend({ sectorIds: z.array(z.string()) })
export type CreateCompanyInput = z.infer<typeof createCompanyInputSchema>

export const createCompanyResultSchema = z.object({ company: CompanyModel })
export type CreateCompanyResult = z.infer<typeof createCompanyResultSchema>

/**
 * Read
 */
export const findCompaniesQuerySchema = z.object({
  name: z.string().optional(),
  sector: z.string().optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
})

export type FindCompaniesQuery = z.infer<typeof findCompaniesQuerySchema>

export const findCompaniesResultSchema = z.object({
  total: z.number(),
  results: z.array(
    CompanyModel.extend({
      sectors: z.array(CompanySectorModel),
    })
  ),
})
export type FindCompaniesResult = z.infer<typeof findCompaniesResultSchema>
