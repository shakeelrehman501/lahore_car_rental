"use client";
import { motion } from "motion/react";

const lines = [["Lahore"], ["Car", "Rentals"]];

export default function SplashScreen() {
  return (
    <div
      className="size-full flex flex-col gap-8 items-center justify-center bg-primary"
      
    >
      {/* Animated Circle */}
      <div className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-white/20 border-t-white rounded-full animate-spin" />

      {/* Brand Name — each letter: outline → filled */}
      <div className="flex flex-col items-center gap-3 sm:gap-5 md:gap-6 font-poppins">
  {lines.map((line, lineIndex) => (
    <div key={lineIndex} className="flex items-center gap-4">
      {line.map((word, i) => (
        <div key={i} className="relative">
          {/* Outline */}
          <motion.span
            className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl font-semibold whitespace-nowrap"
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
              color: "transparent",
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 0.3 + (lineIndex * 2 + i) * 0.25,
              duration: 0.45,
            }}
          >
            {word}
          </motion.span>

          {/* Filled */}
          <motion.span
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3 + (lineIndex * 2 + i) * 0.25,
              duration: 0.45,
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  ))}
</div>
      
      {/* <div className="flex items-center gap-10 mb-5  ">
        {letters.map((letter, i) => (
          <motion.svg
            key={i}
            width="48"
            height="60"
            viewBox="0 0 48 60"
            overflow="visible"
            initial="outline"
            animate="filled"
            transition={{ delay: 0.4 + i * 0.25, duration: 0.5, ease: "easeInOut" }}
            variants={{
              outline: {},
              filled: {},
            }}
          >
           
            <motion.text
              x="24"
              y="48"
              textAnchor="middle"
              fontFamily="'Arial', sans-serif"
              fontSize="52"
              fontWeight="700"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1.2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.45, ease: "easeInOut" }}
            >
              {letter}
            </motion.text>

            
            <motion.text
              x="24"
              y="48"
              textAnchor="middle"
              fontFamily="'Arial', sans-serif"
              fontSize="52"
              fontWeight="700"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.45, ease: "easeInOut" }}
            >
              {letter}
            </motion.text>
          </motion.svg>
        ))}
      </div> */}

      
    </div>
  );
}
