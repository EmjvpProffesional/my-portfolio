import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export function MainLayout() {
  return (
    <>
      <Navbar />

      <div className="min-h-full">

        <main>
            <Outlet />
        </main>
      </div>
    </>
  );
}