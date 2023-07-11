import * as z from "zod"

export const CompanyModel = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().min(2, { message: "The name must be longer than 2 characters" }),
  description: z.string().min(10, { message: "The description must be longer than 10 characters" }),
  banner: z.string().url({ message: "The banner must a valid URL hosting an image" }),
})
