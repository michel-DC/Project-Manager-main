import React from "react";
import { Link } from "react-router-dom";
// home icon
import { FaHome } from "react-icons/fa";
// project icon
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// task icon
import { BsListTask } from "react-icons/bs";
// kanban icon
import { PiKanbanFill } from "react-icons/pi";
// calender icon
import { SlCalender } from "react-icons/sl";
// settings icon
import { IoIosSettings } from "react-icons/io";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-[#101212] border-r border-gray-800 p-4 flex flex-col items-center">
      <ul className="space-y-8 mt-auto mb-auto">
        <li>
          <Link
            to="/"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <FaHome className="text-3xl" />
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <AiOutlineFundProjectionScreen className="text-3xl" />
            <span>Projets</span>
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <BsListTask className="text-3xl" />
            <span>Tâches</span>
          </Link>
        </li>
        <li>
          <Link
            to="/kanban"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <PiKanbanFill className="text-3xl" />
            <span>Kanban</span>
          </Link>
        </li>
        <li>
          <Link
            to="/calendar"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <SlCalender className="text-3xl" />
            <span>Calendrier</span>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="text-white flex items-center space-x-6 text-xl hover:text-[#FFD700]"
          >
            <IoIosSettings className="text-3xl" />
            <span>Paramètre</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
