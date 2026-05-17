import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    isAvailable: true,
    rating: "",
    numReviews: "",
  });

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

  };

  // Handle Image
  const handleImageChange = (e) => {

    setImage(e.target.files[0]);

  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("isAvailable", formData.isAvailable);
      data.append("rating", formData.rating);
      data.append("numReviews", formData.numReviews);

      data.append("image", image);

      const response = await axios.post(
        "http://localhost:3000/api/product/addProduct",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      alert(response.data.message);

      // Reset Form
      setFormData({
        name: "",
        price: "",
        category: "",
        isAvailable: true,
        rating: "",
        numReviews: "",
      });

      setImage(null);

    } catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.message);

      } else {

        alert("Something went wrong");

      }

    } finally {

      setLoading(false);

    }

  };

  return (
    <main className="min-h-screen bg-black flex justify-center items-center px-4 py-32">

      <div
        className="
          w-full
          max-w-2xl
          p-8
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
        "
      >

        <h1
          className="
            text-4xl
            font-bold
            text-center
            text-white
            mb-8
          "
        >
          Create Product
        </h1>

        <form
          onSubmit={handleSubmit}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >

          {/* Product Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            value={formData.price}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* Rating */}
          <input
            type="number"
            name="rating"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* Number Of Reviews */}
          <input
            type="number"
            name="numReviews"
            placeholder="Enter number of reviews"
            value={formData.numReviews}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              outline-none
              focus:ring-2
              focus:ring-red-500
            "
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="
              w-full
              p-3
              rounded-xl
              bg-white
              text-black
              border
              border-gray-300
              cursor-pointer
            "
          />

          {/* Availability */}
          <div
            className="
              flex
              items-center
              gap-4
              text-white
              md:col-span-2
            "
          >

            <label className="text-lg font-semibold">
              Product Available
            </label>

            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="w-5 h-5"
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              md:col-span-2
              bg-red-500
              hover:bg-red-600
              disabled:bg-red-300
              text-white
              text-xl
              font-bold
              py-3
              rounded-xl
              transition-all
              duration-300
            "
          >
            {
              loading
                ? "Creating Product..."
                : "Create Product"
            }
          </button>

        </form>

      </div>

    </main>
  );
};

export default CreateProduct;