import React, { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Calendar: React.FC = () => {
  const { projects } = useProjectContext();
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const totalDays = Math.ceil((daysInMonth + firstDay) / 7) * 7;

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <section className="relative py-8 sm:py-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-6">
              Calendrier des Projets
            </h1>

            <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPreviousMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaChevronLeft className="text-gray-600" />
                </button>
                <div className="text-xl font-semibold text-gray-800">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </div>
                <button
                  onClick={goToNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaChevronRight className="text-gray-600" />
                </button>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center font-semibold text-gray-600 text-sm"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: totalDays }).map((_, i) => {
                    const dayNumber = i - firstDay + 1;
                    const isValidDay =
                      dayNumber > 0 && dayNumber <= daysInMonth;

                    return (
                      <div
                        key={i}
                        className={`aspect-square border rounded-lg p-1 ${
                          isValidDay ? "hover:bg-gray-50" : "bg-gray-100"
                        }`}
                      >
                        {isValidDay && (
                          <>
                            <div className="text-xs text-gray-600">
                              {dayNumber}
                            </div>
                            <div className="mt-0.5">
                              {projects
                                ?.filter((project) => {
                                  const projectStart = new Date(
                                    project.startDate
                                  );
                                  return (
                                    projectStart.getDate() === dayNumber &&
                                    projectStart.getMonth() ===
                                      currentDate.getMonth() &&
                                    projectStart.getFullYear() ===
                                      currentDate.getFullYear()
                                  );
                                })
                                .map((project) => (
                                  <div
                                    key={project.id}
                                    className="text-xs p-0.5 mb-0.5 rounded bg-blue-100 text-blue-800 truncate"
                                    title={project.name}
                                  >
                                    {project.name}
                                  </div>
                                ))}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-gray-700 text-center p-4 text-sm">
                Fonctionnalité de calendrier en cours de développement
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
