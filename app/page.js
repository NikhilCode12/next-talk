"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import Input from "./components/Input";
import Button from "./components/Button";
import axios from "axios";
import CheckBox from "./components/CheckBox";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get("/api/chat");
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  if (loading) return <Loader />;
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
      className="h-full w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* NextTalk */}
      <h1 className="text-4xl font-bold p-6">
        {"Next"}
        <span className="text-indigo-400 ml-1">{"Talk"}</span>
      </h1>
      <div className="bg-slate-700 rounded-md p-12 h-1/2 w-1/2">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start w-1/2"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            name="email"
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            name="password"
            autoComplete="off"
          />
          <div className="mb-4 mt-1 justify-start items-start ">
            <CheckBox label="Remember me" />
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`relative bg-indigo-600 w-full hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              btnLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Login
            {btnLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-900"></div>
              </div>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.main>
  );
}
