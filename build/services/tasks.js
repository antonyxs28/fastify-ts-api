import { db } from "#database";
async function exists(id) {
    return await db.tasks.has(id);
}
async function getTaksById(id) {
    return await db.tasks.get(id);
}
async function getAllTasks() {
    const data = await db.tasks.all();
    return data.map(({ value }) => value);
}
async function createTask(data) {
    const createdAt = new Date();
    const id = createdAt.getTime().toString();
    const status = "pending";
    return await db.tasks.set(id, {
        ...data,
        id,
        status,
        createdAt,
    });
}
async function upadateTask(id, data) {
    const task = await getTaksById(id);
    return await db.tasks.set(id, {
        ...task,
        ...data
    });
}
async function deleteTask(id) {
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
