const Hero = () => {
  return (
    <section className="relative h-screen bg-black text-white flex items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="cafe"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Experience Coffee Like Never Before
        </h1>

        <p className="mt-4 text-gray-300 max-w-lg">
          Crafted with passion. Served with perfection. Discover the finest blends and cozy atmosphere.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Order Now
          </button>

          <button className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition">
            Reserve Table
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;