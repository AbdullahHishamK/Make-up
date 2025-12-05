import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import img1 from "../../assets/white-beauty-store-logo-cosmetics-vector.jpg";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return (
    <nav className="bg-[#151413] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={img1}
                alt="Your Company"
                className="h-8 w-auto mix-blend-mode-multiply"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink
                  to="/layout/home"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/layout/services"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                    }`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/layout/products"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                    }`
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/layout/appointment"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                    }`
                  }
                >
                  Appointment
                </NavLink>
              </div>
            </div>
          </div>

          {/* Right side - Cart, User Profile, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <NavLink
              to="/layout/cart"
              className="relative p-2 text-white hover:text-[#f34263]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f34263] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </NavLink>

            {/* User Profile Circle */}
            {user && (
              <NavLink
                to="/layout/profile"
                className="w-8 h-8 bg-[#f34263] rounded-full flex items-center justify-center text-white font-semibold hover:bg-[#cc2140] transition-colors"
                title="Profile"
              >
                {getInitials(user.name)}
              </NavLink>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-white hover:bg-[#272523]"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform ${menuOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/layout/home"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium block ${
                    isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/layout/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium block ${
                    isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/layout/products"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium block ${
                    isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/layout/appointment"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium block ${
                    isActive ? "bg-[#f34263] text-white" : "text-white hover:bg-[#272523]"
                  }`
                }
              >
                Appointment
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;