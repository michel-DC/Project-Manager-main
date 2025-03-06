import React, { useState, useEffect } from "react";
import { useProjectContext } from "../context/ProjectContext";

interface Task {
  id: string;
  projectId: number;
  description: string;
  completed: boolean;
  dueDate: Date;
}

interface TaskGroup {
  title: string;
  tasks: Task[];
}

const TaskItem: React.FC = () => {
  const { projects } = useProjectContext();
  const [taskGroups, setTaskGroups] = useState<{ [key: number]: TaskGroup[] }>({});
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState<string>("");
  const [newGroupTitle, setNewGroupTitle] = useState("");

  // Load task groups from localStorage on component mount
  useEffect(() => {
    const storedTaskGroups = localStorage.getItem("taskGroups");
    if (storedTaskGroups) {
      setTaskGroups(JSON.parse(storedTaskGroups));
    }
  }, []);

  // Save task groups to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("taskGroups", JSON.stringify(taskGroups));
  }, [taskGroups]);

  const handleAddTask = (projectId: number, groupIndex: number) => {
    if (!newTaskDescription || !dueDate) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      projectId: selectedProject,
      description: newTaskDescription,
      completed: false,
      dueDate: new Date(dueDate),
    };

    const updatedGroups = { ...taskGroups };
    updatedGroups[projectId][groupIndex].tasks.push(newTask);
    setTaskGroups(updatedGroups);
    setNewTaskDescription("");
    setDueDate("");
  };

  const handleToggleTask = (projectId: number, groupIndex: number, taskId: string) => {
    const updatedGroups = { ...taskGroups };
    updatedGroups[projectId][groupIndex].tasks = updatedGroups[projectId][groupIndex].tasks.map((task: Task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskGroups(updatedGroups);
  };

  const handleDeleteTask = (projectId: number, groupIndex: number, taskId: string) => {
    const updatedGroups = { ...taskGroups };
    updatedGroups[projectId][groupIndex].tasks = updatedGroups[projectId][groupIndex].tasks.filter((task: Task) => task.id !== taskId);
    setTaskGroups(updatedGroups);
  };

  const handleAddGroup = () => {
    if (!newGroupTitle || selectedProject === 0) return;

    const newGroup: TaskGroup = {
      title: newGroupTitle,
      tasks: [],
    };

    const updatedGroups = { ...taskGroups };
    if (!updatedGroups[selectedProject]) {
      updatedGroups[selectedProject] = [];
    }
    updatedGroups[selectedProject].push(newGroup);
    setTaskGroups(updatedGroups);
    setNewGroupTitle("");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-6">
      <div className="absolute z-1 pointer-events-none">
        <img
          className="w-full h-3/4 object-cover opacity-50"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>
      <section className="relative py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] font-bold text-center mb-6">Gestion des Tâches</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--muted)] rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl text-[var(--foreground)] font-semibold mb-4">Choisir un projet</h2>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(Number(e.target.value))}
              className="p-2 border rounded-lg bg-[var(--muted)] text-[var(--foreground)] mb-4"
            >
              <option value={0}>Choisir un projet</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          {selectedProject > 0 && (
            <div className="bg-[var(--muted)] rounded-lg shadow-lg p-6 mb-6 mt-6">
              <h2 className="text-2xl text-[var(--foreground)] font-semibold mb-4">Créer un nouveau groupe de tâches</h2>
              <input
                type="text"
                value={newGroupTitle}
                onChange={(e) => setNewGroupTitle(e.target.value)}
                placeholder="Titre du groupe"
                className="p-2 border border-[var(--foreground)] text-[var(--foreground)] rounded-lg w-full mb-4 focus:border-[var(--foreground)]"
              />
              <button
                onClick={handleAddGroup}
                className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg hover:bg-[var(--primary)] transition duration-200 cursor-pointer"
              >
                Ajouter un groupe
              </button>
            </div>
          )}

          {taskGroups[selectedProject]?.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-[var(--muted)] rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl text-[var(--foreground)] font-semibold mb-4">{group.title}</h2>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  placeholder="Entrer une tâche à réaliser..."
                  className="flex-1 p-2 border rounded-lg bg-[var(--muted)] text-[var(--foreground)]"
                />

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => {
                    if (!e.target.value) {
                      throw new Error("Date is required");
                    }
                    setDueDate(e.target.value);
                  }}
                  className="p-2 border rounded-lg bg-[var(--muted)] text-[var(--foreground)]"
                />

                <button
                  onClick={() => handleAddTask(selectedProject, groupIndex)}
                  className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-lg hover:bg-[var(--primary)] transition duration-200 cursor-pointer"
                >
                  Ajouter une tâche
                </button>
              </div>

              <div className="space-y-3">
                {group.tasks.map((task: Task) => (
                  <div
                    key={task.id}
                    className="p-4 border border-[var(--border)] rounded-lg flex items-center justify-between bg-[var(--muted)] hover:shadow-md transition duration-200"
                  >
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(selectedProject, groupIndex, task.id)}
                        className="mr-3 h-5 w-5 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
                      />
                      <span className={`text-lg ${task.completed ? "line-through text-[var(--muted-foreground)]" : "text-[var(--foreground)]"}`}>
                        {task.description}
                      </span>
                      <span className="ml-4 text-sm text-red-800">
                        Pour le: {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(selectedProject, groupIndex, task.id)}
                      className="ml-4 px-3 py-1 text-red-700 hover:text-red-800 rounded-md hover:bg-red-100 transition duration-200 cursor-pointer"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TaskItem;
