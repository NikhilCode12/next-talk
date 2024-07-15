"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, type, children }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      type={type}
      disabled={loading}
      className={`relative bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-800"></div>
        </div>
      )}
    </motion.button>
  );
};

export default Button;
