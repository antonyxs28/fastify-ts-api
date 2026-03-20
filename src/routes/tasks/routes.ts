import { createControllerTask } from "#controllers/tasks/create.js";
import { deleteTaskController } from "#controllers/tasks/delete.js";
import {
  getAllTasksController,
  getByIdTasksController,
} from "#controllers/tasks/get.js";
import { updateTaskController } from "#controllers/tasks/update.js";
import { defineRoutes } from "#functions/utils.js";

export default defineRoutes((app) => {
  app.get("/", getAllTasksController);
  app.get("/:id", getByIdTasksController);
  app.post("/", createControllerTask);
  app.patch("/:id", updateTaskController);
  app.delete("/:id", deleteTaskController);
});
