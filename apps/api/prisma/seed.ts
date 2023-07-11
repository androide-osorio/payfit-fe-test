import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const seedCompanies: Prisma.CompanyCreateInput[] = [
  {
    name: 'Hourglass',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet quis a lorem massa. Est turpis in nec tempor et a. Neque ac quisque nunc amet velit mi.',
    banner: 'https://picsum.photos/200/300',
  },
  {
    name: 'Quotient',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet quis a lorem massa. Est turpis in nec tempor et a. Neque ac quisque nunc amet velit mi.',
    banner: 'https://picsum.photos/200/300',
  },
  {
    name: 'Catalog',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet quis a lorem massa. Est turpis in nec tempor et a. Neque ac quisque nunc amet velit mi.',
    banner: 'https://picsum.photos/200/300',
  },
  {
    name: 'Layers',
    description:
      'Lorem ipsum dolor sit amet consectetur. Amet quis a lorem massa. Est turpis in nec tempor et a. Neque ac quisque nunc amet velit mi.',
    banner: 'https://picsum.photos/200/300',
  },
]

const seedSectors: Prisma.SectorCreateInput[] = [
  {
    name: 'Biotechnology',
  },
  {
    name: 'Environmental Technologies',
  },
  {
    name: 'Manufacturing',
  },
  {
    name: 'Information Techology',
  },
]

async function main() {
  console.log('Clearing the db...')
  await prisma.companySector.deleteMany()
  await prisma.company.deleteMany()
  await prisma.sector.deleteMany()

  console.log('Clearing done')

  console.log('Start seeding ...')
  await Promise.all(
    seedCompanies.map(async (company) => {
      const comp = await prisma.company.create({
        data: company,
      })
      console.log(`Created company with id: ${comp.id}`)
    })
  )

  await Promise.all(
    seedSectors.map(async (sector) => {
      const sec = await prisma.sector.create({
        data: sector,
      })
      console.log(`Created sec with id: ${sec.id}`)
    })
  )

  const companies = await prisma.company.findMany()
  const sectors = await prisma.sector.findMany()

  await Promise.all(
    companies.map(
      async (company, index) =>
        await prisma.companySector.create({
          data: {
            companyId: company.id,
            sectorId: sectors[index].id,
          },
        })
    )
  )

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
