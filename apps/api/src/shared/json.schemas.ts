import { buildJsonSchemas } from "fastify-zod"
import {
  notFoundResponseSchema,
  GenericErrorSchema,
  successResponseSchema,
  uuidSchema,
  createCompanyResultSchema,
  createCompanyInputSchema,
  findCompaniesQuerySchema,
  findCompaniesResultSchema,
  findSectorsResultSchema,
} from "../schemas"

export const { schemas, $ref } = buildJsonSchemas({
  notFoundResponseSchema,
  successResponseSchema,
  GenericErrorSchema,
  uuidSchema,
  createCompanyResultSchema,
  createCompanyInputSchema,
  findCompaniesQuerySchema,
  findCompaniesResultSchema,
  findSectorsResultSchema,
})
