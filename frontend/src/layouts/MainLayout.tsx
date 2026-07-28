import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <header>
        <h1>Touchline</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;