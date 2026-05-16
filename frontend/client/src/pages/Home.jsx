import Navbar from "../components/Navbar";
import bgImage from "../assets/pexels-ivanna-lebediuk-2150011567-35056953.jpg";
import { motion } from 'motion/react';

const Home = () => {
  return (
    <div className="relative min-h-screen">

      {/* Background Image */}
      <img
        src='https://images.pexels.com/photos/33371816/pexels-photo-33371816.jpeg'
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        alt="collab"
      />

      {/* Hero Content */}
      <div className="relative h-64 z-10 flex items-center justify-center text-white">
        <h1 className="text-6xl flex items-center justify-center font-bold">
          Creative Collaboration
        </h1>
      </div>
    </div>
  );
};

export default Home;