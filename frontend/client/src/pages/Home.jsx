import Navbar from "../components/Navbar";
import bgImage from "../assets/pexels-ivanna-lebediuk-2150011567-35056953.jpg";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/33371816/pexels-photo-33371816.jpeg"
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        alt="collab"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white gap-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-center"
        >
          CAFE VIBE'S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-center max-w-2xl"
        >
          create amazing experiences together.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate("/menu")}
          className="
            bg-pink-700
            hover:bg-pink-300
            text-white
            font-bold
            py-3
            px-8
            rounded-xl
            transition-all
            duration-300
            shadow-xl
          "
        >
          Get Started
        </motion.button>

      </div>
    </div>
  );
};

export default Home;
