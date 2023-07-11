import { prisma } from '../../db'
import type { CreateCompanyInput, FindCompaniesQuery } from '../../schemas'

export async function createCompany({ name, description, banner, sectorIds }: CreateCompanyInput) {
  const company = await prisma.company.create({
    data: {
      name,
      description,
      banner,
    },
  })

  await Promise.all(
    sectorIds.map(
      async (sectorId) =>
        await prisma.companySector.create({
          data: {
            companyId: company.id,
            sectorId,
          },
        })
    )
  )

  return company
}

export async function findCompanies({ name, sector, skip, take }: FindCompaniesQuery) {
  const where = {
    ...(name && {
      name: { contains: name },
    }),
    ...(sector && {
      sectors: {
        some: {
          sectorId: sector,
        },
      },
    }),
  } as const

  const [total, results] = await prisma.$transaction([
    prisma.company.count({ where }),
    prisma.company.findMany({
      where,
      skip,
      take,
      include: {
        sectors: true,
      },
    }),
  ])

  return { total, results }
}
