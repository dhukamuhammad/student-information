import React, { useState, useEffect } from "react";
// import Navbar from "../admin/layout/Navbar";
import Navbar from "../../component/admin/Navbar"
// import Sidebar from "../../component/admin/Sidebar";
import Sidebar from "../../component/admin/Sidebar";
import "../../assets/css/main.css";

function HOC() {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
 
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default HOC;
