import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import Logo from "../../assets/Log.png";

const menus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Features ▾",
    dropdown: [
      { label: "Expense Tracker", path: "/tracker" },
      { label: "Analytics", path: "/analytics" },
    ],
  },
  {
    title: "Products",
    path: "Products",
  },
  {
    title: "Support",
    path: "/support",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b-4 border-[#5bb450]">
      <div className="flex justify-between items-center px-28 py-4">
        <div className="flex flex-row gap-2 items-center">
          <img src={Logo} className="w-16 h-16" alt="Xpense" />
          <h2 className="text-4xl font-sans font-semibold text-black">Xpense</h2>
        </div>

        <nav className="flex gap-8 relative">
          {menus.map((menu, i) =>
            menu.dropdown ? (
              <div key={i} className="relative group">
                <span className="text-2xl text-black hover:text-gray-600 cursor-pointer">
                  {menu.title}
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {menu.dropdown.map((item, j) => (
                    <Link
                      key={j}
                      to={item.path}
                      className="block px-4 py-2 text-lg text-black hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={i} to={menu.path}>
                <span className="text-2xl text-black hover:text-gray-600">
                  {menu.title}
                </span>
              </Link>
            )
          )}
        </nav>

        {isAuthenticated ? (
          <div className="text-2xl font-semibold text-[#5bb450] capitalize">
            {user?.name || "User"}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-white bg-lime-400 px-5 py-2 rounded-md text-xl hover:bg-[#6da95c] transition-all duration-300"
          >
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
