import React from "react";

interface TaskItemProps {
  task: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, completed }) => {
  return (
    <div className="p-2 border border-gray-700 rounded-lg flex justify-between">
      <span className={completed ? "line-through text-gray-500" : ""}>
        {task}
      </span>
      <input type="checkbox" checked={completed} readOnly />
    </div>
  );
};

export default TaskItem;
