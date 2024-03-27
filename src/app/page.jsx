"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      
      <div className="min-h-[550px] h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-6xl font-bold">
            Crafting{" "}
            <span className="text-indigo-400">
              <ReactTyped
                strings={["Digital Experiences", "Designing Tomorrow."]}
                typeSpeed={50}
                backSpeed={60}
                loop
              />
            </span>
          </h1>
          {/* DESC */}
          <p className="text-xs md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex  gap-4 text-sm md:text-xl  ">
            <Link
              href={"/portfolio"}
              className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link
              href={"/contact"}
              className="p-2 md:p-4 rounded-lg ring-1 ring-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
