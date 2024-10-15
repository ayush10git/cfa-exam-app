import Image from "next/image";
import React from "react";

const Navbar = ({ isSidebarOpen }) => {
  return (
    <div className="z-10">
      <div className="md:hidden">
        {/* Navbar content shown only on smaller screens if sidebar is closed */}
        <div
          className={`h-[60px] w-full bg-blue-200 overflow-x-hidden max-w-[100vw] fixed top-[0px] left-0 ${
            !isSidebarOpen ? "block" : "hidden"
          }`}
        >
          navbar
        </div>
      </div>
      <div className="hidden md:block lg:block">
        {/* Navbar content for larger screens, always visible */}
        <div className="flex items-center h-[60px] w-[calc(100vw-250px)] bg-white shadow-md overflow-x-hidden max-w-[100vw] fixed top-[0px] left-[250px] z-300">
          <div className="flex items-center gap-2 ml-3">
            <Image
              width={20}
              height={20}
              src="/avatar.png"
              className="w-10 h-10 object-contain rounded-full"
            />
            <div className="flex flex-col -gap-4">
              <span className="text-xs font-light">Hey, there</span>
              <span className="font-light">Julia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
