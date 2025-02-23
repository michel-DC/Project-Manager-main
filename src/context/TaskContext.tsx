import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface task {
  id: string;
  projectId: number;
  description: string;
  completed: boolean;
  dueDate: Date;
}

interface TaskContextType {
  tasks: task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const UseTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
