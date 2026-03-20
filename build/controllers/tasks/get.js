import { tasksServices } from "#services/tasks.js";
import { StatusCodes } from "http-status-codes";
import { notFoundTasks } from "./helpers.js";
async function getAll(_req, reply) {
    const tasks = await tasksServices.getAll();
    return reply.status(StatusCodes.OK).send({
        message: `Tasks: ${tasks.length}`,
        tasks,
    });
}
async function getTaskById(req, reply) {
    const { id } = req.params;
    const task = await tasksServices.getById(id);
    if (!task) {
        return notFoundTasks(id, reply);
    }
    return reply.status(StatusCodes.OK).send(task);
}
export { getAll as getAllTasksController, getTaskById as getByIdTasksController, };
