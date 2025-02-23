import React, { useState, useEffect } from "react";
import { useProjectContext } from "../context/ProjectContext";

interface Task {
  id: string;
  projectId: number;
  description: string;
  completed: boolean;
  dueDate: Date;
}

const TaskItem: React.FC = () => {
  const { projects } = useProjectContext();
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState<string>("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTaskDescription || !selectedProject || !dueDate) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      projectId: selectedProject,
      description: newTaskDescription,
      completed: false,
      dueDate: new Date(dueDate),
    };

    setTasks([...tasks, newTask]);
    setNewTaskDescription("");
    setDueDate("");
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((task: Task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task: Task) => task.id !== taskId));
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-8 sm:py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-6">
          Liste des tâches
        </h1>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-300 rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex gap-4 mb-4">
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(Number(e.target.value))}
                  className="p-2 border rounded-lg bg-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>Choisir un projet</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  placeholder="Entrer une tâche à réaliser..."
                  className="flex-1 p-2 border rounded-lg bg-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-800"
                />

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => {
                    if (!e.target.value) {
                      alert("Veuillez sélectionner une date");
                      return;
                    }
                    setDueDate(e.target.value);
                  }}
                  className="p-2 border rounded-lg bg-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-800"
                />

                <button
                  onClick={handleAddTask}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Ajouter une tâche
                </button>
              </div>

              <div className="space-y-3">
                {tasks
                  .filter((task: Task) => task.projectId === selectedProject)
                  .map((task: Task) => (
                    <div
                      key={task.id}
                      className="p-4 border border-gray-700 rounded-lg flex items-center justify-between bg-gray-300 hover:shadow-md transition duration-200 ease-in-out"
                    >
                      <div className="flex items-center flex-1">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => handleToggleTask(task.id)}
                          className="mr-3 h-5 w-5 rounded border-gray-600 text-green-500 focus:ring-green-500"
                        />
                        <span
                          className={`${
                            task.completed
                              ? "line-through text-gray-500"
                              : "text-gray-900 "
                          }`}
                        >
                          {task.description}
                        </span>
                        <span className="ml-4 text-sm text-red-800">
                          Pour le: {new Date(task.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="ml-4 px-3 py-1 text-red-700 hover:text-red-800 rounded-md hover:bg-red-100 transition duration-200 ease-in-out"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskItem;
