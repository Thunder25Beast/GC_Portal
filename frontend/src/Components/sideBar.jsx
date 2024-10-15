import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "../sidebar.css";

const routes = [
  {
    path: "/",
    name: "Leaderboards",
    icon: "🏆", // You can replace this with your desired icon component
  },
  {
    path: "/hostels",
    name: "Hostels",
    icon: "🏢",
  },
  {
    path: "/instuctions",
    name: "Rules",
    icon: "📜",
  },
  {
    path: "/GC/Genre1",
    name: "GCs",
    icon: "🏅",
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { width: "200px", transition: { duration: 0.5 } },
    closed: { width: "45px", transition: { duration: 0.5 } },
  };

  const iconVariants = {
    open: { opacity: 1, rotate: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, rotate: -180, transition: { duration: 0.3 } },
  };

  return (
    <div className="main-container">
      <motion.div
        className={`sidebar ${isOpen ? "sidebar_open" : ""}`}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="top_section">
          {isOpen && <h1 className="logo">Tech GC</h1>}
          <motion.div
            className="bars"
            onClick={toggle}
            initial={{ opacity: 1 }}
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </motion.div>
        </div>
        <section className="routes">
          {routes.map((route, index) => (
            <NavLink
              to={route.path}
              key={index}
              className="link"
              // activeStyle={{ backgroundColor: "yellow", color: "black" }} // Add your custom active styles here
              onClick={() => setIsOpen(false)}
            >
              <div className="icon">{route.icon}</div>
              {isOpen && (
                <div
                  className={`link_text ${
                    window.location.pathname === route.path ? "" : ""
                  }`}
                >
                  {route.name}
                </div>
              )}
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
