import React from "react";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
