import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      alert(response.data.message);

      // Reset Form
      setFormData({
        email: "",
        password: "",
      });

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
    <main className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
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

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;