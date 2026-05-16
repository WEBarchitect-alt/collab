import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  return (
    <div className="overflow-hidden bg-black min-h-screen">
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route
            path="/"
            element={
              <CinematicBlurTransition>
                <Home />
              </CinematicBlurTransition>
            }
          />

          <Route
            path="/register"
            element={
              <CinematicBlurTransition>
                <Register />
              </CinematicBlurTransition>
            }
          />

          <Route
            path="/login"
            element={
              <CinematicBlurTransition>
                <Login />
              </CinematicBlurTransition>
            }
          />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

const CinematicBlurTransition = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative min-h-screen"
    >
      
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: "100%",
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          h-full
          bg-white/10
          backdrop-blur-xl
          z-[100]
          pointer-events-none
        "
      />

      
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default App;