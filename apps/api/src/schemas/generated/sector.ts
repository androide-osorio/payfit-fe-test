import * as z from "zod"

export const SectorModel = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
})
