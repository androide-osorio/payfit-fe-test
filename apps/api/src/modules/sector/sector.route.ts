import { FastifyInstance } from 'fastify'
import { findSectorsHandler } from './sector.controller'
import { $ref } from '../../shared'

export async function sectorRoutes(server: FastifyInstance) {
  server.get(
    '',
    {
      schema: {
        response: {
          200: $ref('findSectorsResultSchema'),
          500: $ref('GenericErrorSchema'),
        },
      },
    },
    findSectorsHandler
  )
}
