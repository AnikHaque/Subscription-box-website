import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-600 text-white px-4 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Website Name */}
        <Link to="/" className="text-xl font-bold">
          TheCrate
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`md:flex gap-4 items-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            to="/"
            className={`block py-1 ${
              isActive("/") ? "font-semibold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className={`block py-1 ${
              isActive("/profile") ? "font-semibold underline" : ""
            }`}
          >
            My Profile
          </Link>
          <Link to="/contact">Contact Us</Link>

          {/* Auth Area */}
          {user ? (
            <div className="flex items-center gap-4">
              {/* Profile image with tooltip */}
              {user.photoURL ? (
                <div className="relative group cursor-pointer">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                    {user.displayName || "No Name"}
                  </div>
                </div>
              ) : (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-black">
                  ?
                </div>
              )}

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
