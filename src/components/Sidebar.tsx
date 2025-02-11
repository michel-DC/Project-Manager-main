import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-black border-r border-gray-800 p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:text-gray-400">
            Projets
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="text-white hover:text-gray-400">
            Tâches
          </Link>
        </li>
        <li>
          <Link to="/kanban" className="text-white hover:text-gray-400">
            Kanban
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="text-white hover:text-gray-400">
            Calendrier
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
