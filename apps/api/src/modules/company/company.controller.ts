import { FastifyRequest, FastifyReply } from 'fastify'
import type { CreateCompanyInput, FindCompaniesQuery } from '../../schemas'
import { createCompany, findCompanies } from './company.service'

export async function createCompanyHandler(req: FastifyRequest<{ Body: CreateCompanyInput }>, reply: FastifyReply) {
  try {
    const company = await createCompany(req.body)
    reply.status(201).send({ company })
  } catch (error) {
    console.error(error)
    reply.status(500).send({ message: 'Something went wrong' })
  }
}

export async function findCompaniesHandler(
  req: FastifyRequest<{ Querystring: FindCompaniesQuery }>,
  reply: FastifyReply
) {
  try {
    const companies = await findCompanies(req.query)
    reply.status(200).send({ companies })
  } catch (error) {
    console.error(error)
    reply.status(500).send({ message: 'Something went wrong' })
  }
}
