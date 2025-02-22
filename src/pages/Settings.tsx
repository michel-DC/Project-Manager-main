import React, { useState } from "react";
import {
  FaMoon,
  FaSun,
  FaLanguage,
  FaCode,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

const Settings: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [defaultTech, setDefaultTech] = useState("React");
  const [autoGithub, setAutoGithub] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("daily");

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
              Paramètres
            </h1>

            <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Theme Switch */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaSun className="mr-2" />
                  Apparence
                </h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">Mode sombre</p>
                    <p className="text-sm text-gray-500">
                      Basculer entre le mode clair et sombre
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-full ${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-yellow-400 text-gray-800"
                    }`}
                  >
                    {isDarkMode ? <FaMoon /> : <FaSun />}
                  </button>
                </div>
              </div>

              {/* Language Switch */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaLanguage className="mr-2" />
                  Langue
                </h2>
                <div className="flex gap-4">
                  <button
                    onClick={() => setLanguage("fr")}
                    className={`px-4 py-2 rounded-lg flex-1 hover:cursor-pointer ${
                      language === "fr"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-4 py-2 rounded-lg flex-1 hover:cursor-pointer ${
                      language === "en"
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Default Technology */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaCode className="mr-2" />
                  Technologie par défaut
                </h2>
                <div className="flex gap-4">
                  <select
                    value={defaultTech}
                    onChange={(e) => setDefaultTech(e.target.value)}
                    className="w-full text-black p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                    <option value="TypeScript">TypeScript</option>
                  </select>
                </div>
              </div>

              {/* GitHub Integration */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaGithub className="mr-2" />
                  Intégration GitHub
                </h2>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-700">
                      Synchronisation automatique
                    </p>
                    <p className="text-sm text-gray-500">
                      Synchroniser automatiquement les projets avec GitHub
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer bg-gray-900"
                      checked={autoGithub}
                      onChange={() => setAutoGithub(!autoGithub)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Backup Settings */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaDatabase className="mr-2" />
                  Sauvegarde des données
                </h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-4">
                    Fréquence de sauvegarde automatique des projets
                  </p>
                  <select
                    value={backupFrequency}
                    onChange={(e) => setBackupFrequency(e.target.value)}
                    className="w-full text-black p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="hourly">Toutes les heures</option>
                    <option value="daily">Quotidienne</option>
                    <option value="weekly">Hebdomadaire</option>
                    <option value="manual">Manuel uniquement</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
