import { FastifyInstance } from 'fastify'
import { $ref } from '../../shared'
import { createCompanyHandler, findCompaniesHandler } from './company.controller'

export async function companyRoutes(server: FastifyInstance) {
  server.post(
    '/create',
    {
      schema: {
        body: $ref('createCompanyInputSchema'),
        response: {
          201: $ref('createCompanyResultSchema'),
          500: $ref('GenericErrorSchema'),
        },
      },
    },
    createCompanyHandler
  )
  server.get(
    '',
    {
      schema: {
        querystring: $ref('findCompaniesQuerySchema'),
        response: {
          200: $ref('findCompaniesResultSchema'),
          500: $ref('GenericErrorSchema'),
        },
      },
    },
    findCompaniesHandler
  )
}
