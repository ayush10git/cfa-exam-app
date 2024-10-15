"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { PiExam } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "@/components/navbar/Navbar";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const sidebarElementCss = "bg-[#79A8EE] rounded-md text-white";

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Automatically close the sidebar when the path changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 z-50 w-[250px]">
      {/* Button to toggle the sidebar, visible only on screens smaller than 768px */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <MenuIcon className="w-8 h-8" />
      </button>

      {/* Sidebar that is fixed on screens 768px and larger */}
      <div
        className={`bg-[#D7E4F8] h-screen flex flex-col gap-2 p-2 fixed top-0 left-0 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:w-auto z-40`}
      >
        <div className="-ml-1">
          <Image
            src="/logo.png"
            className="w-[190px] 2xl:w-[210px]"
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
        {/* Add Navbar content inside sidebar for smaller screens */}
        {isSidebarOpen && (
          <div className="p-4 mt-2 bg-blue-200">
            <Navbar isSidebarOpen={isSidebarOpen} />
          </div>
        )}
      </div>

      {/* Overlay when sidebar is open on smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default DashboardSidebar;
