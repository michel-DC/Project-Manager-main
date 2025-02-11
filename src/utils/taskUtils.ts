export function getCompletedTasks(tasks: { completed: boolean }[]) {
  return tasks.filter((task) => task.completed).length;
}
