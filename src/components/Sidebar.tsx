import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";

const Sidebar: React.FC = () => {
  return (
    <nav className="bg-[var(--background)] p-4 border-b-3 border-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <FaHome className="text-2xl" />
            <span>Accueil</span>
          </Link>

          <Link
            to="/projects"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <AiOutlineFundProjectionScreen className="text-2xl" />
            <span>Projets</span>
          </Link>

          <Link
            to="/tasks"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <BsListTask className="text-2xl" />
            <span>Tâches</span>
          </Link>

          <Link
            to="/progress"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <IoStatsChart className="text-2xl" />
            <span>Progression</span>
          </Link>

          <Link
            to="/calendar"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <SlCalender className="text-2xl" />
            <span>Calendrier</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center space-x-2 text-[var(--foreground)] hover:text-[var(--primary)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200"
          >
            <IoIosSettings className="text-2xl" />
            <span>Paramètre</span>
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center px-3 py-3 w-auto text-md font-bold text-[var(--foreground)] transition-all duration-200 bg-[var(--muted)] border border-transparent rounded-lg hover:bg-[var(--hover-effect)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--muted)] cursor-pointer whitespace-nowrap"
          >
            <FaSignInAlt className="text-2xl mr-2" />
            <span>Se connecter</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
