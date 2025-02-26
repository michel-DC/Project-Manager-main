// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";

// interface Task {
//   id: number;
//   projectId: number;
//   description: string;
//   completed: boolean;
//   dueDate: Date;
// }

// interface TaskContextType {
//   tasks: Task[];
//   addTask: (task: Task) => void;
//   deleteTask: (id: number) => void;
// }

// const TaskContext = createContext<TaskContextType | undefined>(undefined);

// export const useTaskContext = () => {
//   const context = useContext(TaskContext);
//   if (!context) {
//     throw new Error("useTaskContext must be used within a TaskProvider");
//   }
//   return context;
// };

// interface TaskProviderProps {
//   children: ReactNode;
// }

// export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
//   const [tasks, setTasks] = useState<Task[]>(() => {
//     const storedTasks = localStorage.getItem("tasks");
//     return storedTasks ? JSON.parse(storedTasks) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (task: Task) => {
//     setTasks((prevTasks) => {
//       const updatedTasks = [...prevTasks, task];
//       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//       return updatedTasks;
//     });
//   };

//   const deleteTask = (id: number) => {
//     setTasks((prevTasks) => {
//       const updatedTasks = prevTasks.filter((task) => task.id !== id);
//       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//       return updatedTasks;
//     });
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };
