import { FastifyRequest, FastifyReply } from "fastify"
import { findSectors } from "./sector.service"

export async function findSectorsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const sectors = await findSectors()
    reply.status(201).send({ sectors })
  } catch (error) {
    console.error(error)
    reply.status(500).send({ message: "Something went wrong" })
  }
}
