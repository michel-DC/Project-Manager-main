import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUserPlus,
  //   FaGoogle,
  //   FaFacebook,
  //   FaApple,
  //   FaMicrosoft,
} from "react-icons/fa";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/register logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      {/* fix this part, when the bg image is set all elements under dosen't work
      anymore */}
      <div className="absolute inset-2 overflow-hidden">
        <img
          className="w-full h-full opacity-50"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl text-gray-800 font-bold text-center mb-8">
          {isLogin ? "Se connecter" : "S'inscrire"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Mot de passe
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
            </div>
          )}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Se souvenir de moi
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
          >
            {isLogin ? (
              <>
                <FaLock className="mr-2" />
                Se connecter
              </>
            ) : (
              <>
                <FaUserPlus className="mr-2" />
                S'inscrire
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-600 cursor-pointer hover:text-gray-900"
          >
            {isLogin
              ? "Pas encore de compte ? S'inscrire"
              : "Déjà un compte ? Se connecter"}
          </button>
        </div>

        {/* <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Ou connectez-vous avec</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FaFacebook className="mr-2" />
              Facebook
            </button>
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              <FaApple className="mr-2" />
              Apple
            </button>
            <button className="flex items-center bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
              <FaMicrosoft className="mr-2" />
              Microsoft
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
