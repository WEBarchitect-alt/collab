import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  // Get User From LocalStorage
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // Check Admin
  const isAdmin = user?.isAdmin || false;

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
    { name: "Menu", path: "/menu" },

    ...(isAdmin
      ? [
          {
            name: "Create Product",
            path: "/create-product",
          },
        ]
      : []),
  ];

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        pt-4
        px-4
      "
    >

      <motion.nav
        whileHover={{
          scale: 1.005,
        }}
        className="
          relative
          flex
          items-center
          justify-between
          border
          border-white/10
          px-6
          py-4
          rounded-full
          text-white
          text-sm
          bg-white/10
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(255,255,255,0.08)]
        "
      >

        {/* Logo */}
        <Link to="/">

          <motion.div
            whileHover={{
              rotate: 180,
              scale: 1.1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-cyan-500
              shadow-lg
            "
          >

            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.706" cy="16" r="4.706" fill="white" />
              <circle cx="16.001" cy="4.706" r="4.706" fill="white" />
              <circle cx="16.001" cy="27.294" r="4.706" fill="white" />
              <circle cx="27.294" cy="16" r="4.706" fill="white" />
            </svg>

          </motion.div>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {
            navLinks.map((link, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >

                <Link
                  to={link.path}
                  className="
                    relative
                    font-medium
                    hover:text-pink-400
                    transition-all
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-[2px]
                    after:bg-gradient-to-r
                    after:from-pink-500
                    after:to-cyan-400
                    hover:after:w-full
                    after:transition-all
                    after:duration-300
                  "
                >
                  {link.name}
                </Link>

              </motion.div>

            ))
          }

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              border
              border-white/20
              hover:bg-white/10
              px-5
              py-2
              rounded-full
              text-sm
              font-medium
              transition-all
              duration-300
            "
          >
            Contact
          </motion.button>

          <Link to="/register">

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0px 0px 30px rgba(255,255,255,0.5)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                bg-gradient-to-r
                from-white
                via-gray-100
                to-gray-300
                text-black
                px-5
                py-2
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
              "
            >
              Get Started
            </motion.button>

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >

          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>

        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>

          {
            menuOpen && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  absolute
                  top-20
                  left-0
                  w-full
                  rounded-3xl
                  py-6
                  flex
                  flex-col
                  items-center
                  gap-5
                  text-base
                  bg-black/90
                  backdrop-blur-2xl
                  border
                  border-white/10
                  md:hidden
                "
              >

                {
                  navLinks.map((link, index) => (

                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.08,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >

                      <Link
                        to={link.path}
                        className="
                          hover:text-pink-400
                          transition-all
                          duration-300
                        "
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>

                    </motion.div>

                  ))
                }

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    border
                    border-white/20
                    hover:bg-white/10
                    px-5
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    transition-all
                  "
                >
                  Contact
                </motion.button>

                <Link to="/register">

                  <motion.button
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      bg-gradient-to-r
                      from-white
                      via-gray-100
                      to-gray-300
                      text-black
                      px-5
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                    "
                  >
                    Get Started
                  </motion.button>

                </Link>

              </motion.div>

            )
          }

        </AnimatePresence>

      </motion.nav>

    </motion.div>
  );
};

export default Navbar;