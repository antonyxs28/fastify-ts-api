import { FastifyReply, FastifyRequest } from "fastify";
import { notFoundTasks } from "./helpers.js";
import { tasksServices } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";

interface DeleteRoute {
  Params: {
    id: string;
  };
}

async function controller(
  req: FastifyRequest<DeleteRoute>,
  reply: FastifyReply,
) {
  const { id } = req.params;
  const exists = await tasksServices.exists(id);
  if (!exists) {
    return notFoundTasks(id, reply);
  }

  await tasksServices.delete(id)

  return reply.status(StatusCodes.OK).send({
    message: "Task deleted successfully!"
  })
}

export {controller as deleteTaskController}
