"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeIn" }}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeIn", delay: 0.25 }}
        className="text-4xl font-bold mb-6"
      >
        {"Next"}
        <span className="text-indigo-400 ml-1">{"Talk"}</span>
      </motion.h1>
      <div className="loader-container flex items-center">
        <div className="dot-carousel">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
        </div>
      </div>
      <style jsx>{`
        .loader-container {
          width: 80px;
          height: 20px;
          position: relative;
        }
        .dot-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 20px;
          overflow: hidden;
          position: relative;
        }
        .dot {
          width: 10.5px;
          height: 10px;
          border-radius: 50%;
          margin: 0 5px;
          animation: dotCarousel 1s infinite;
        }
        .dot1 {
          background-color: #6b46c1;
          animation-delay: 0s;
        }

        .dot2 {
          background-color: whitesmoke;
          animation-delay: 0.3s;
        }

        .dot3 {
          background-color: whitesmoke;
          animation-delay: 0.6s;
        }

        .dot4 {
          background-color: #6b46c1;
          animation-delay: 0.9s;
        }
        @keyframes dotCarousel {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </motion.div>
  );
}
