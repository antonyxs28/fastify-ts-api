import { taskStatus } from "#schemas/tasks.js";
import { tasksServices } from "#services/tasks.js";
import z from "zod";
import { notFoundTasks } from "./helpers.js";
import { StatusCodes } from "http-status-codes";
const schema = z
    .object({
    name: z.string().min(3).optional(),
    status: z.enum(taskStatus).optional(),
})
    .refine(({ name, status }) => {
    return status !== undefined || name !== undefined;
}, {
    message: "At least one field (name or status) must be provided for update",
});
async function controller(req, reply) {
    const { id } = req.params;
    const exists = await tasksServices.exists(id);
    if (!exists) {
        return notFoundTasks(id, reply);
    }
    const data = schema.parse(req.body);
    const updatedTask = await tasksServices.update(id, data);
    return reply.status(StatusCodes.OK).send({
        message: "Task updated successfully",
        task: updatedTask,
    });
}
export { controller as updateTaskController };
