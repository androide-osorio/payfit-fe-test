import { z } from "zod"
import { SectorModel } from "../generated"

export const findSectorsResultSchema = z.object({
  sectors: z.array(SectorModel),
})
export type FindSectorsResult = z.infer<typeof findSectorsResultSchema>
