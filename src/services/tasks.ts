import { db } from "#database";
import {
  CreateTaskSchema,
  TaskStatus,
  UpdateTaskSchema,
} from "#schemas/tasks.js";

async function exists(id: string) {
  return await db.tasks.has(id);
}

async function getTaksById(id: string) {
  return await db.tasks.get(id);
}

async function getAllTasks() {
  const data = await db.tasks.all();
  return data.map(({ value }) => value);
}

async function createTask(data: CreateTaskSchema) {
  const createdAt = new Date();
  const id = createdAt.getTime().toString();
  const status: TaskStatus = "pending";

  return await db.tasks.set(id, {
    ...data,
    id,
    status,
    createdAt,
  });
}

async function upadateTask(id: string, data: UpdateTaskSchema) {
  const task = await getTaksById(id);
  return await db.tasks.set(id, {
    ...data,
    ...task,
  });
}

async function deleteTask(id: string) {
  return await db.tasks.delete(id);
}

export const tasksServices = {
  exists,
  getById: getTaksById,
  getAll: getAllTasks,
  create: createTask,
  update: upadateTask,
  delete: deleteTask,
};

