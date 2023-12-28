import Dexie from "dexie";
export const db = new Dexie('JedyTodoApp');

// Declare tables, IDs and indexes
db.version(1).stores({
    todo: '++id, task, status'
});