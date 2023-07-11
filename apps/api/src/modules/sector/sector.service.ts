import { prisma } from "../../db"

export async function findSectors() {
  return await prisma.sector.findMany()
}
