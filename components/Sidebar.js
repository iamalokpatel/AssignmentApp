"use client";
import "../app/page.css";
import { useState } from "react";
export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden  bg-sky-800 w-8 h-5 mb-5 ml-3 text-white fixed top-4 left-4 z-50 text-xs"
      >
        ☰
      </button>

      <div
        className={`row-span-3 p-4 SideNavigation grid grid-rows-[1fr_100px] ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:flex-col md:w-64 md:h-auto`}
      >
        <div className="row-start-1 Links">
          <a className="HomeLink" href="">
            Home
          </a>
          <a href=""> Stages & Cheacklists</a>
          <a href=""> Upload Docs</a>
          <a href=""> Praefered Vendors</a>
          <a href=""> Take Stack</a>
          <a href=""> Targets</a>
          <a href=""> Zee Sales Target</a>
          <a href=""> MAI Settings</a>
          <a href="">
            Pending Questions
            <p className="PendingQs">3</p>
          </a>
        </div>
        <button className="row-start-2 mr-36 text-gray-400 mt-auto mb-2 mr-1">
          Logout
        </button>
      </div>
    </>
  );
}
