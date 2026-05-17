import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ITEMS_PER_LOAD = 6;

const Menu = () => {

  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const observer = useRef();

  // Fetch Products
  const fetchProducts = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        "http://localhost:3000/api/product/getProducts",
        {
          withCredentials: true,
        }
      );

      setProducts(response.data.products);

      setVisibleProducts(
        response.data.products.slice(0, ITEMS_PER_LOAD)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Load More Products
  const loadMoreProducts = () => {

    const nextPage = page + 1;

    const newVisibleProducts = products.slice(
      0,
      nextPage * ITEMS_PER_LOAD
    );

    setVisibleProducts(newVisibleProducts);

    setPage(nextPage);

  };

  // Infinite Scroll Observer
  const lastProductRef = useCallback(
    (node) => {

      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {

        if (
          entries[0].isIntersecting &&
          visibleProducts.length < products.length
        ) {
          loadMoreProducts();
        }

      });

      if (node) {
        observer.current.observe(node);
      }

    },
    [loading, visibleProducts, products]
  );

  // Add To Cart
  const addToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item._id === product._id
    );

    if (existingProduct) {

      existingProduct.quantity += 1;

    } else {

      cart.push({
        ...product,
        quantity: 1,
      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${product.name} added to cart`);

  };

  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-gray-950
      to-black
      px-6
      pt-32
      pb-12
      relative
      overflow-hidden
"
    >

      {/* Glow Background */}
      <div
        className="
          absolute
          top-0
          left-0
          w-96
          h-96
          bg-pink-500/20
          blur-3xl
          rounded-full
          -z-10
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-cyan-500/20
          blur-3xl
          rounded-full
          -z-10
        "
      />

      {/* Loading */}
      {
        loading ? (

          <div className="flex justify-center items-center h-[60vh]">

            <motion.h1
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="
                text-5xl
                font-bold
                bg-gradient-to-r
                from-white
                to-gray-400
                bg-clip-text
                text-transparent
              "
            >
              Loading Products...
            </motion.h1>

          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-10
            "
          >

            {
              visibleProducts.map((product, index) => {

                const isLastProduct =
                  index === visibleProducts.length - 1;

                return (

                  <motion.div
                    ref={
                      isLastProduct
                        ? lastProductRef
                        : null
                    }
                    key={product._id}
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                    }}
                    className="
                      relative
                      group
                      rounded-[2rem]
                      overflow-hidden
                    "
                  >

                    {/* Glow Border */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/40
                        via-gray-300/40
                        to-white/20
                        rounded-[2rem]
                        blur-md
                        opacity-40
                        group-hover:opacity-100
                        transition-all
                        duration-500
                      "
                    />

                    {/* Card */}
                    <div
                      className="
                        relative
                        bg-gradient-to-br
                        from-white
                        via-gray-100
                        to-gray-200
                        border
                        border-white/40
                        rounded-[2rem]
                        overflow-hidden
                        shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                        group-hover:shadow-[0_15px_60px_rgba(255,255,255,0.22)]
                        transition-all
                        duration-500
                      "
                    >

                      {/* Image */}
                      <div className="overflow-hidden">

                        <motion.img
                          whileHover={{
                            scale: 1.1,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          src={product.image}
                          alt={product.name}
                          className="
                            w-full
                            h-72
                            object-cover
                          "
                        />

                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col gap-5">

                        {/* Name & Price */}
                        <div className="flex justify-between items-center">

                          <h2
                            className="
                              text-3xl
                              font-bold
                              text-black
                            "
                          >
                            {product.name}
                          </h2>

                          <span
                            className="
                              text-3xl
                              font-extrabold
                              bg-gradient-to-r
                              from-gray-800
                              via-black
                              to-gray-700
                              bg-clip-text
                              text-transparent
                            "
                          >
                            ₹{product.price}
                          </span>

                        </div>

                        {/* Description */}
                        <p
                          className="
                            text-gray-700
                            leading-relaxed
                          "
                        >
                          {product.description}
                        </p>

                        {/* Button */}
                        <motion.button
                          whileTap={{
                            scale: 0.92,
                          }}
                          whileHover={{
                            scale: 1.03,
                          }}
                          onClick={() => addToCart(product)}
                          className="
                            relative
                            overflow-hidden
                            py-4
                            rounded-2xl
                            font-bold
                            text-lg
                            text-white
                            bg-gradient-to-r
                            from-black
                            via-gray-900
                            to-black
                            hover:from-gray-800
                            hover:via-black
                            hover:to-gray-700
                            shadow-lg
                            transition-all
                            duration-500
                          "
                        >

                          <span className="relative z-10">
                            Add To Cart
                          </span>

                          {/* Shine */}
                          <div
                            className="
                              absolute
                              top-0
                              left-[-120%]
                              w-full
                              h-full
                              bg-white/30
                              skew-x-12
                              group-hover:left-[120%]
                              transition-all
                              duration-1000
                            "
                          />

                        </motion.button>

                      </div>

                    </div>

                  </motion.div>

                );

              })
            }

          </div>

        )
      }

      {/* Infinite Scroll Loader */}
      {
        visibleProducts.length < products.length && (

          <div className="flex justify-center mt-14">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="
                w-14
                h-14
                border-4
                border-white/20
                border-t-white
                rounded-full
              "
            />

          </div>

        )
      }

    </main>
  );
};

export default Menu;