import * as z from "zod"

export const CompanySectorModel = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  companyId: z.string(),
  sectorId: z.string(),
})
