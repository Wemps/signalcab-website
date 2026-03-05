import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
}
