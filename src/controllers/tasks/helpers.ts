import { FastifyReply } from "fastify";
import { StatusCodes } from "http-status-codes";

export function notFoundTasks (id: string, reply: FastifyReply) {
  return reply.status(StatusCodes.NOT_FOUND).send({
    message: `No taks found with id: ${id}`
  })
}