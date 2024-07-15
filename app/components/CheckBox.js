"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 text-white">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`rounded h-4 w-4 flex items-center justify-center ${
          isChecked ? "bg-indigo-600 border-indigo-600" : "bg-slate-900"
        }`}
        onClick={toggleCheckbox}
      >
        {isChecked && (
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </motion.div>
      <span className="text-sm text-gray-300 ml-1" onClick={toggleCheckbox}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
