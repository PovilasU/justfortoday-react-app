import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:underline">
              Pagrindinis
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              Apie
            </Link>
          </li>
          {/* Pridėkite daugiau nuorodų pagal poreikį */}
        </ul>
      </nav>

      <main className="p-4">
        {/* Outlet yra vieta, kur bus rodomas vidinis kelias (page content) */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
