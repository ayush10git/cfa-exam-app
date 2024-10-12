"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // To detect route changes
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { PiExam } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu"; // Button icon for opening sidebar

const DashboardSidebar = () => {
  const pathname = usePathname();
  const sidebarElementCss = "bg-[#79A8EE] rounded-md text-white";

  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar when the route (pathname) changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div>
      {/* Button to toggle the sidebar, visible only on small screens */}
      <button className="sm:hidden p-2" onClick={toggleSidebar}>
        <MenuIcon className="w-8 h-8" />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#D7E4F8] min-h-screen sm:w-[150px] md:w-[170px] lg:w-[200px] xl:w-[250px] flex flex-col gap-2 p-2 fixed top-0 left-0 z-50 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 sm:w-auto`}
      >
        <div className="-ml-1">
          <Image
            src="/logo.png"
            className="md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[210px]"
            width={300}
            height={300}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div
            className={`text-lg p-2 font-medium ${
              pathname === "/dashboard" ? sidebarElementCss : "text-[#474646]"
            }`}
          >
            <Link href="/dashboard" className="flex items-center gap-3">
              <DashboardIcon />
              Dashboard
            </Link>
          </div>
          <div
            className={`text-lg p-2 font-medium ${
              pathname === "/dashboard/analytics"
                ? sidebarElementCss
                : "text-[#474646]"
            }`}
          >
            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3"
            >
              <AutoGraphIcon />
              Analytics
            </Link>
          </div>
          <div
            className={`text-lg p-2 font-medium ${
              pathname === "/dashboard/mocktest"
                ? sidebarElementCss
                : "text-[#474646]"
            }`}
          >
            <Link
              href="/dashboard/mocktest"
              className="flex items-center gap-3"
            >
              <PiExam className="w-6 h-6" />
              Mock Test
            </Link>
          </div>
          <div
            className={`text-lg p-2 font-medium ${
              pathname === "/dashboard/practice"
                ? sidebarElementCss
                : "text-[#474646]"
            }`}
          >
            <Link
              href="/dashboard/practice"
              className="flex items-center gap-3"
            >
              <AddTaskIcon />
              Practice
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay when sidebar is open on small screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
