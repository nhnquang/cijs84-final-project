import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "./AppContext";

const NavBar = () => {
  const appContext = useContext(AppContext);

  return (
    <ul className="flex justify-center gap-3">
      <li>
        <NavLink
          to="/"
          className="text-2xl font-semibold rounded-md p-2 bg-white hover:bg-sky-500 text-sky-700 hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent  "
        >
          {appContext.lang === "en" ? "Home" : "Trang chủ"}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-2xl font-semibold rounded-md p-2 bg-white hover:bg-sky-500 text-sky-700 hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent  "
          to="/wordquiz"
        >
          {appContext.lang === "en" ? "Word Quiz" : "Đố chữ"}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
