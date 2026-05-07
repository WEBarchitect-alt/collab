import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      gsap.from(q(".item"), {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "top 20vh",
        },
        scale: 2,
        opacity: 1,
        y: 300,
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleanup
  }, []);

  return (
    <section className="bg-black text-white flex items-cente gap:3xl">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="cafe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="relative mt-50 max-w-7xl mx-auto px-6"
        ref={containerRef}
      >
        <h1 className="item text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Experience Coffee Like Never Before
        </h1>

        <p className="item mt-4 text-gray-300 max-w-lg">
          Crafted with passion. Served with perfection. Discover the finest blends and cozy atmosphere.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="item px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Order Now
          </button>

          <button className="item px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition">
            Reserve Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// const Hero = () => {

//   const containerRef = useRef();

// useEffect(() => {
//   const q = gsap.utils.selector(containerRef);

//   gsap.from(q(".item"), {
//     scrollTrigger: {
//       trigger: containerRef.current,
//       start: "top 80%",
//     },
//     opacity: 0,
//     y: 50,
//     stagger: 0.2,
//   });
// }, []);

//   return (
//     <section className="relative h-screen bg-black text-white flex items-center">
      
//       {/* Background Image */}
//       <div className="absolute inset-0 fixed">
//         <img
//           src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
//           alt="cafe"
//           className="w-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6" ref={containerRef}>
//         <h1 className="item text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
//           Experience Coffee Like Never Before
//         </h1>

//         <p className="item mt-4 text-gray-300 max-w-lg">
//           Crafted with passion. Served with perfection. Discover the finest blends and cozy atmosphere.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
//             Order Now
//           </button>

//           <button className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition">
//             Reserve Table
//           </button>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;