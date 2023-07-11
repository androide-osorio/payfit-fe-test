import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { withRefResolver } from 'fastify-zod'

import { companyRoutes } from './modules/company/company.route'
import { sectorRoutes } from './modules/sector/sector.route'
import { schemas } from './shared'

import { healthcheckRoute } from './modules/health-check/health-check.route'

export function buildServer() {
  const server = fastify({ logger: true })

  server.register(fastifyCors, {
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  })

  // Schemas registrations
  for (const schema of schemas) {
    server.addSchema(schema)
  }

  // Open API and Swagger config
  server.register(
    swagger,
    withRefResolver({
      exposeRoute: true,
      openapi: {
        info: {
          title: 'Api',
          description: 'Api documentation',
          version: '1.0.0',
        },
      },
    })
  )

  server.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
  })

  // Routes registrations
  server.register(companyRoutes, { prefix: 'api/v1/companies' })
  server.register(sectorRoutes, { prefix: 'api/v1/sectors' })
  server.register(healthcheckRoute, { prefix: 'api/v1/health-check' })

  return server
}
